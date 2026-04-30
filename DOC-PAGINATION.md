# Componente de paginación

---

## Funcionamiento

Renderiza dos botones (Anterior / Siguiente) y un indicador `página actual / total de páginas`. No guarda ningún estado propio: es un componente **controlado**, lo que significa que el padre es el dueño exclusivo del número de página actual.

---

## Props

`currentPage` -> página actualmente activa (base 1).
`totalPages` -> Total de páginas calculado en el componente padre.
`onPageChange` -> Callback que recibe el número de la página destino. Es mejor si recibe un número absoluto en vez de un delta (`+1` / `1`). Por qué es mejor? Porque el componente padre puede validar o redirigir antes de hacer efectivo el cambio de página.

---

## Lógica de bordes

```
disabled={currentPage <= 1} //botón Prev desactivado
disabled={currentPage >= totalPages} //botón Next desactivado
```

## Cálculo de totalPages (Responsabilidad del componente padre que utilice el paginador)

```ts
const LIMIT = 12
const totalPages = Math.ceil(data.total / LIMIT) 
```
