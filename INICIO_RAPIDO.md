# GUÍA RÁPIDA DE INICIO - AndionDesing

## 🚀 Iniciar el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# El sitio estará en: http://localhost:4322
```

## 📝 Personalización Rápida

### 1. Cambiar Email
Buscar y reemplazar en todos los archivos:
- `info@andiondesing.com` → Tu email

### 2. Cambiar WhatsApp
En `src/components/WhatsAppButton.astro` y `src/pages/contacto.astro`:
- Reemplazar URL `https://wa.me/?text=...` con tu número

### 3. Cambiar Colores
En `tailwind.config.mjs`:
```javascript
colors: {
  primary: '#d61e3e',      // Rojo (cambiar aquí)
  secondary: '#1a1a2e',    // Azul oscuro
  accent: '#ffb700',       // Oro
}
```

### 4. Cambiar Imágenes
- **Home**: Editar URLs en `src/pages/index.astro` (línea ~50+)
- **Productos**: Editar URLs en `src/pages/productos.astro` (línea ~50+)
- **Galería**: Editar JSON en `src/data/gallery.json`

## 📱 Páginas Incluidas

| Página | Archivo | Descripción |
|--------|---------|-------------|
| Home | `src/pages/index.astro` | Página principal con hero y categorías |
| Productos | `src/pages/productos.astro` | Catálogo de 6 deportes |
| Galería | `src/pages/galeria.astro` | Mosaico dinámico con modal |
| Contacto | `src/pages/contacto.astro` | Formulario de cotización + FAQ |

## 🛠️ Componentes Disponibles

- `Navbar.astro` - Navegación fija
- `Footer.astro` - Pie de página
- `WhatsAppButton.astro` - Botón flotante
- `SportsCard.astro` - Card deportiva
- `GalleryModal.astro` - Modal galería
- `HeroSection.astro` - Hero reutilizable
- `CTASection.astro` - CTA reutilizable
- `FeatureGrid.astro` - Grid de características

## 🚀 Desplegar en Producción

### Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Opción 3: GitHub Pages
```bash
npm run build
# Sube contenido de la carpeta 'dist/'
```

## 📊 Estructura de Archivo CSS

El archivo `src/styles/global.css` contiene:
- Import de Google Fonts
- Tailwind base, components, utilities
- Clases personalizadas para estilo
- Animaciones sutiles

## ✅ Checklist de Lanzamiento

- [ ] Cambiar email (3 lugares)
- [ ] Cambiar número de WhatsApp (2 lugares)
- [ ] Cambiar colores del sitio
- [ ] Agregar imágenes propias (mínimo 8 para galería)
- [ ] Actualizar texto de descripción
- [ ] Probar todos los formularios
- [ ] Verificar mobile responsive
- [ ] Configurar analytics (Google)
- [ ] Desplegar en producción

## 🎨 Colores del Sitio

```
Primario (Rojo):     #d61e3e
Secundario (Azul):   #1a1a2e
Acento (Oro):        #ffb700
Blanco:              #ffffff
Gris:                #f5f5f5
```

## 📞 Soporte

Para más información, consultar `DOCUMENTACION.md`

---

**Creado con ❤️ para AndionDesing - 2025**
