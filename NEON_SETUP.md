# Configuración de Neon (Netlify DB) en AndionDesing

## ¿Qué es Neon?
Neon es un servicio serverless de PostgreSQL que funciona perfecto con Netlify Functions. Almacena todas las solicitudes de cotización de forma segura.

## Pasos de Configuración

### 1. **Base de Datos Neon (Ya configurada ✅)**
Tu conexión a Neon ya está configurada en `.env.local`:
```
DATABASE_URL=postgresql://neondb_owner:npg_gS65ExufZDKw@ep-bitter-night-aetn2a1c.c-2.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require
```

### 2. **Configurar en Netlify (IMPORTANTE)**

Para que la API serverless funcione en producción, debes añadir la variable de entorno en Netlify:

#### Opción A: Desde el Dashboard de Netlify
1. Ve a tu sitio en [netlify.com](https://netlify.com)
2. Haz clic en **Site settings**
3. Ve a **Build & deploy** → **Environment**
4. Haz clic en **Edit variables**
5. Añade una nueva variable:
   - **Key:** `DATABASE_URL`
   - **Value:** `postgresql://neondb_owner:npg_gS65ExufZDKw@ep-bitter-night-aetn2a1c.c-2.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require`

#### Opción B: Desde la CLI
```bash
netlify env:set DATABASE_URL "postgresql://neondb_owner:npg_gS65ExufZDKw@ep-bitter-night-aetn2a1c.c-2.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require"
```

### 3. **Verificar Localmente**
Para probar localmente que todo funciona:

```bash
# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev

# La API estará disponible en:
# http://localhost:3000/.netlify/functions/submit-contact
```

### 4. **Cómo Funciona**

**Cuando un usuario envía el formulario:**
1. El formulario en `/contacto` captura los datos
2. Los datos se envían a `/.netlify/functions/submit-contact`
3. La función serverless conecta a Neon
4. Los datos se guardan en la tabla `contact_requests`
5. Se retorna una confirmación al usuario

**La tabla `contact_requests` contiene:**
- `id`: ID único (autoincremental)
- `team_name`: Nombre del equipo
- `sport`: Deporte seleccionado
- `quantity`: Cantidad de uniformes
- `email`: Email de contacto
- `phone`: Teléfono/WhatsApp
- `message`: Mensaje adicional
- `created_at`: Fecha y hora de envío

### 5. **Ver los Datos Guardados**

Puedes ver tus solicitudes de cotización en:
1. [Console de Neon](https://console.neon.tech)
2. Selecciona tu proyecto
3. Ve a **SQL Editor**
4. Ejecuta:
```sql
SELECT * FROM contact_requests ORDER BY created_at DESC;
```

### 6. **Seguridad**

✅ Las credenciales de base de datos NO están en el repositorio
✅ `.env.local` está en `.gitignore`
✅ Las variables se configuran en Netlify (no en git)
✅ Las conexiones usan SSL/TLS
✅ La tabla se crea automáticamente si no existe

### 7. **Troubleshooting**

**Error: "Base de datos no configurada"**
- Verifica que `DATABASE_URL` esté configurada en Netlify
- Verifica que `.env.local` existe localmente

**Error: "Connection timeout"**
- Verifica tu conexión a internet
- Verifica que la URL de Neon sea correcta
- Comprueba los logs en Netlify

**Error: "Faltan datos requeridos"**
- Asegúrate que todos los campos requeridos del formulario estén completados
- Revisa la consola del navegador para más detalles

## Próximos Pasos

1. ✅ Configura `DATABASE_URL` en Netlify
2. ✅ Deploy tu sitio a Netlify
3. ✅ Prueba el formulario
4. ✅ Verifica los datos en Neon

¡Listo! Tu sistema de cotizaciones está completamente funcional. 🎉
