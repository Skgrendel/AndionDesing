import { neon } from '@neondatabase/serverless';

export const config = {
  runtime: 'nodejs',
  memory: 1024,
  timeoutInSeconds: 30,
};

export default async (req) => {
  // Solo aceptar POST
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    // Obtener datos del formulario
    const body = await req.json();
    
    const {
      teamName,
      sport,
      quantity,
      email,
      phone,
      message,
    } = body;

    // Validar datos requeridos
    if (!teamName || !sport || !quantity || !email || !phone) {
      return new Response(
        JSON.stringify({ error: 'Faltan datos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Conectar a la base de datos Neon
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      return new Response(
        JSON.stringify({ error: 'Base de datos no configurada' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const sql = neon(databaseUrl);

    // Crear tabla si no existe
    await sql`
      CREATE TABLE IF NOT EXISTS contact_requests (
        id SERIAL PRIMARY KEY,
        team_name VARCHAR(255) NOT NULL,
        sport VARCHAR(100) NOT NULL,
        quantity INTEGER NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Insertar datos
    const result = await sql`
      INSERT INTO contact_requests (team_name, sport, quantity, email, phone, message)
      VALUES (${teamName}, ${sport}, ${quantity}, ${email}, ${phone}, ${message || null})
      RETURNING id, created_at
    `;

    return new Response(
      JSON.stringify({
        success: true,
        message: '¡Solicitud enviada correctamente!',
        requestId: result[0].id,
        createdAt: result[0].created_at,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error en API:', error);
    return new Response(
      JSON.stringify({
        error: 'Error al procesar la solicitud',
        details: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
