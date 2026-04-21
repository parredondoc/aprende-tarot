# Aprende Tarot — tu app Android (versión PWA)

¡Hola! Estos archivos son tu juego de tarot listo para funcionar como app real en Android. Nunca hiciste una app antes — no hay problema, esta guía te lleva paso a paso. Tiempo estimado: **10 minutos**, sin instalar nada.

---

## ¿Qué es una PWA y por qué empezamos por acá?

Una **PWA** (Progressive Web App) es una página web que se comporta como app: se instala en tu pantalla de inicio, abre sin barra de navegador, guarda tu progreso, y funciona sin internet una vez instalada. No aparece en la Play Store, pero se ve y se siente como una app nativa.

Es el camino más rápido para pasar de "tengo código" a "tengo una app en mi celu". Más adelante, cuando quieras publicarla en la Play Store, empaquetamos esto mismo con **Capacitor**.

---

## Archivos en esta carpeta

- `index.html` — la app completa (HTML, CSS y JavaScript en un solo archivo)
- `manifest.json` — metadata para que Android la reconozca como app
- `sw.js` — service worker (habilita el modo offline y el cacheo)
- `icon-192.png` y `icon-512.png` — íconos de la app
- `README.md` — esto que estás leyendo

---

## Publicar la app (10 minutos)

Vamos a subir los archivos a **GitHub Pages**, que es hosting web gratuito de GitHub. Si nunca usaste GitHub, no importa: todo se hace desde el navegador, sin comandos.

### Paso 1 · Creá una cuenta de GitHub (si no tenés)

Andá a https://github.com/signup y registrate. Es gratis y te alcanza con un correo.

### Paso 2 · Creá un repositorio

Una vez logueado:

1. Click en el `+` arriba a la derecha → **New repository**
2. **Repository name**: `aprende-tarot` (o el nombre que quieras, sin espacios ni acentos)
3. Marcá **Public**
4. Marcá **Add a README file** (lo necesitás marcado para que se cree el repo directo)
5. Click **Create repository**

### Paso 3 · Subí los archivos

En la página del repo recién creado:

1. Click en **Add file** → **Upload files**
2. Arrastrá **todos** los archivos de esta carpeta (index.html, manifest.json, sw.js, icon-192.png, icon-512.png) — podés dejar afuera este README si querés
3. Abajo, en **Commit changes**, click en el botón verde
4. Cuando te pregunte si sobreescribir el README existente, marcá "Commit directly to main branch"

### Paso 4 · Activá GitHub Pages

1. En tu repo, click en la pestaña **Settings** (arriba a la derecha)
2. En el menú izquierdo, click en **Pages**
3. En **Source**, elegí **Deploy from a branch**
4. En **Branch**, elegí **main** y carpeta **/ (root)**
5. Click **Save**

Esperá 1–2 minutos. Recargá la página **Pages**, y arriba te va a mostrar la URL de tu app. Algo tipo:

```
https://tu-usuario.github.io/aprende-tarot/
```

Copiá esa URL — esa es tu app.

### Paso 5 · Instalá en tu Android

1. Abrí esa URL en **Chrome** en tu Android
2. Chrome te va a ofrecer **"Agregar a pantalla de inicio"** o **"Instalar app"** en un banner, o desde el menú de los 3 puntos (⋮) arriba a la derecha
3. Aceptá
4. Buscá el ícono del sol púrpura en tu home — esa es tu app

Abriendo desde ahí, se ve sin barra del navegador, guarda tu progreso entre sesiones, y funciona sin internet.

---

## Listo, ¿y ahora?

La app ya funciona. Podés:

- **Compartirla**: mandá la URL a quien quieras; cualquiera con Android la puede instalar igual que vos
- **Modificarla**: editá `index.html` en GitHub (click en el archivo → lápiz), cambiá textos de lecciones, agregá quizzes, ajustá colores, y guardá. La app se actualiza sola en todos los dispositivos la próxima vez que tengan internet.
- **Llevarla a la Play Store**: siguiente paso si querés que aparezca oficialmente. Se hace con Capacitor (hablamos de esto cuando estés listo)

---

## Si algo no funciona

**"No me aparece la opción de instalar"**
Chrome requiere HTTPS (GitHub Pages ya lo da) y que hayas usado la página unos segundos. Dale un minuto y recargá. También probá el menú ⋮ → buscá "Instalar app" o "Agregar a pantalla de inicio".

**"La app dice 404 / no carga"**
Asegurate de que GitHub Pages esté habilitado (Settings → Pages debe mostrar la URL en verde). A veces tarda 2–3 minutos después de activarlo.

**"Los íconos no aparecen"**
Verificá que los archivos `icon-192.png` y `icon-512.png` estén en el mismo nivel que `index.html`, no en una subcarpeta.

**"Quiero resetear el progreso"**
Tocá el botón ↺ arriba a la derecha en la app, dentro de la pantalla principal.

---

## Ideas para después

Cuando esto funcione y quieras seguir, algunas mejoras posibles:

- **Más lecciones**: agregar módulos (la corte, tiradas avanzadas, psicogenealogía)
- **Sistema de rachas**: días seguidos estudiando (estilo Duolingo)
- **Audio**: voz explicando cada carta
- **Comunidad**: si querés publicarla "de verdad", Capacitor → Play Store (US$25 una vez)

Cualquier cosa, avisame y seguimos.
