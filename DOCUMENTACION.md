# AndionDesing - Sitio Web de Uniformes Deportivos Personalizados

Sitio web profesional en Astro + Tailwind CSS + DaisyUI para AndionDesing, especialista en sublimación y diseño de uniformes deportivos personalizados.

## 🚀 Características

✅ **4 Páginas principales:**
- 🏠 **Home**: Hero espectacular, video de presentación, categorías deportivas priorizadas, proceso, testimonios
- 👕 **Productos**: Catálogo completo de los 6 deportes especializados (Fútbol, Futsal, Baloncesto, Voleibol, Béisbol, Softball)
- 🖼️ **Galería**: Mosaico dinámico con modal, carga progresiva de imágenes, filtros
- 📧 **Contacto**: Formulario de cotización, WhatsApp directo, información de contacto, FAQ

✅ **Características Técnicas:**
- Tailwind CSS 3 + DaisyUI para componentes
- Animaciones sutiles y micro-interacciones
- Navbar fijo y footer informativo
- Botón flotante WhatsApp
- Diseño responsive (mobile-first)
- Colores deportivos agresivos (rojo #d61e3e, azul oscuro #1a1a2e, oro #ffb700)
- Sin precios visibles - Enfoque en "Solicitar cotización"

✅ **Estrategia de Marketing Integrada:**
- Mensajes de exclusividad personalizada
- Showcase progresivo de diseños
- CTAs basados en deseo ("Diseña tu uniforme", "Crea tu equipo")
- Señales de autoridad (calidad, rigor profesional)
- Frases de escasez creativa ("Cupos limitados", "Diseños exclusivos por temporada")

## 📦 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.astro          # Navegación fija
│   ├── Footer.astro          # Pie de página
│   ├── WhatsAppButton.astro  # Botón flotante
│   ├── SportsCard.astro      # Card deportiva reutilizable
│   ├── GalleryModal.astro    # Modal para galería
│   ├── HeroSection.astro     # Sección hero reutilizable
│   ├── CTASection.astro      # Llamada a acción
│   └── FeatureGrid.astro     # Grid de características
├── pages/
│   ├── index.astro           # Home
│   ├── productos.astro       # Catálogo de productos
│   ├── galeria.astro         # Galería
│   └── contacto.astro        # Contacto y formulario
├── layouts/
│   └── Layout.astro          # Layout principal
├── styles/
│   └── global.css            # Estilos globales + Tailwind
└── data/
    └── gallery.json          # Datos administrables de galería
```

## 🛠️ Instalación y Desarrollo

### Requisitos Previos
- Node.js 18+ 
- npm o pnpm

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

El sitio estará disponible en `http://localhost:4322`

## 🎨 Personalización

### Cambiar Colores

Editar `tailwind.config.mjs`:

```javascript
colors: {
  primary: '#d61e3e',      // Rojo intenso
  secondary: '#1a1a2e',    // Azul oscuro
  accent: '#ffb700',       // Oro/Amarillo
}
```

### Actualizar Información de Contacto

1. **Navbar.astro** - Link de navegación
2. **Footer.astro** - Email y WhatsApp
3. **WhatsAppButton.astro** - URL de WhatsApp (cambiar el número)
4. **Contacto.astro** - Formulario y datos

Buscar y reemplazar:
- `info@andiondesing.com` → Tu email
- `https://wa.me/?text=...` → Tu número de WhatsApp (formato: `https://wa.me/NÚMERO`)

### Agregar/Editar Imágenes de Galería

Editar `src/data/gallery.json`:

```json
{
  "id": "modal-1",
  "image": "URL_DE_IMAGEN",
  "title": "Nombre del diseño",
  "sport": "Deporte",
  "description": "Descripción detallada",
  "features": ["Feature 1", "Feature 2"],
  "featured": true
}
```

### Configurar Imágenes de Productos

En `src/pages/productos.astro`, actualizar el array `sportsData` con nuevas imágenes y descripciones para cada deporte.

## 📱 Componentes Reutilizables

### SportsCard
```astro
<SportsCard 
  sport="Fútbol"
  image="url-imagen"
  description="Descripción"
  benefits={['Beneficio 1', 'Beneficio 2']}
/>
```

### HeroSection
```astro
<HeroSection 
  title="Título"
  subtitle="Subtítulo"
  backgroundImage="url-opcional"
  ctaText="Botón"
  ctaLink="/ruta"
/>
```

### CTASection
```astro
<CTASection 
  title="Título"
  description="Descripción"
  primaryButtonText="Botón primario"
  primaryButtonLink="/ruta"
  secondaryButtonText="Botón secundario"
  secondaryButtonLink="/ruta"
/>
```

## 🔧 Configuración de Astro

El proyecto usa:
- **@astrojs/tailwind** - Integración Tailwind en Astro
- **tailwindcss** v3.4.1 - Framework CSS
- **daisyui** - Componentes Tailwind pre-construidos

Configuración en `astro.config.mjs`:

```javascript
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
});
```

## 📊 Optimizaciones para SEO

- Meta tags en cada página
- Descripciones personalizadas
- Estructura semántica HTML
- Imágenes optimizadas de Unsplash
- URLs amigables

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm run build
# Sube el contenido de dist/
```

## 📈 Estrategia de Conversión

El sitio implementa:

1. **Hero impactante** - Primera impresión profesional
2. **Video de presentación** - Credibilidad y engagement
3. **Proceso transparente** - 4 pasos claros
4. **Testimonios reales** - Prueba social
5. **Cupos limitados** - Urgencia/escasez
6. **CTAs estratégicos** - "Diseña tu uniforme", no "Comprar"
7. **Galería aspiracional** - Mostrar calidad sin precios
8. **WhatsApp directo** - Menor fricción de contacto
9. **Formulario detallado** - Calificar leads
10. **FAQ section** - Resolver objeciones

## 📝 Notas Importantes

- ❌ **NO mostrar precios** en el sitio - Todo redirecciona a cotización
- ✅ **Énfasis en exclusividad** - "Diseños únicos", "Cupos limitados"
- ✅ **Copy aspiracional** - "Transforma tu identidad", "Equipo campeón"
- ✅ **Imágenes de calidad** - Uniformes profesionales en uso
- ✅ **Animaciones sutiles** - No saturar, mejorar UX

## 🔐 Seguridad

- Formulario de contacto sin backend incluido (integrar con servicio)
- WhatsApp link para evitar guardar números en el sitio
- Sin datos sensibles almacenados localmente

## 📞 Soporte

Para actualizar contenido:
1. Editar archivos `.astro` para contenido estático
2. Editar `gallery.json` para galería
3. Editar `tailwind.config.mjs` para colores/fuentes
4. Usar componentes reutilizables para mantener consistencia

## 📄 Licencia

Uso privado para AndionDesing - 2025
