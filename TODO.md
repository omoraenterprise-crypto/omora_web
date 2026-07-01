# TODO - Refactor permisos Admin/Vendedor en web

## Paso 1: Análisis y preparar cambios
- [x] Confirmar schema Firestore: `productos_alianza` + `vendedorId`.
- [x] Verificar que el web todavía usa arrays hardcodeados.

## Paso 2: Implementar permisos reales
- [ ] En `Shopping_platform/Shopping_platform.html`, dejar de depender del `roleSelect`.
- [ ] Calcular `role` en base a `currentUser.email` y `ADMIN_EMAIL`.
- [ ] Solo mostrar/permitir admin para `omora.enterprise@gmail.com`.
- [ ] Restringir acciones de vendedor a productos con `vendedorId === currentUser.uid`.

## Paso 3: Reemplazar data hardcodeada por Firestore (CRUD real)
- [ ] Tiendas públicas desde `tiendas`.
- [ ] Mis productos vendedor desde `productos_alianza`.
- [ ] Admin panel desde `tiendas`, `productos_alianza` y `usuarios` (o la colección correspondiente).

## Paso 4: Acciones (CRUD)
- [ ] Vendedor: crear/editar/archivar/activar/borrar productos en `productos_alianza`.
- [ ] Admin: borrar/editar todo (tiendas y productos).
- [ ] Vendedor: eliminar su tienda real (`tiendas` doc id = uid) y sus productos.

## Paso 5: Pruebas
- [ ] Verificar navegación y que no hay rutas admin accesibles por UI.
- [ ] Probar que el vendedor puede administrar su tienda real.
- [ ] Probar que solo el admin email puede borrar/editar todo.

