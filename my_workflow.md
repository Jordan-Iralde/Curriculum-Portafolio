# Development & Versioning Workflow

## Objetivo

Este documento define **cómo trabajo**, no solo qué construyo. El objetivo es:

* Mantener foco en **entrega de valor real**
* Reducir fricción mental al desarrollar
* Separar claramente **experimentación** de **entregas formales**
* Elevar el estándar profesional del proyecto

---

## Principios

1. **Las releases entregan valor**
   Cada versión debe poder explicarse en una frase clara orientada al usuario o al sistema.

2. **Los commits describen cambios técnicos**
   No cuentan la historia del producto, cuentan la historia del código.

3. **Experimentar está permitido (y esperado)**
   El desorden vive en branches de versión, no en `main`.

4. **El historial importa**
   El repositorio debe mostrar criterio, claridad y progresión.

---

## Versionado

### Nueva versión / feature

```bash
git checkout -b v0.x
```

Este branch representa una **apuesta de valor**, no una tarea aislada.

Durante el desarrollo:

* Se permite romper cosas
* Se permite reescribir
* Se permite explorar

Nada de esto llega a `main` hasta que la versión **dice algo claro**.

---

## Flujo de trabajo

1. Crear branch de versión (`v0.x`)
2. Iterar libremente
3. Probar y ajustar
4. Consolidar commits
5. Merge a `main` cuando la versión:

   * Compila
   * Es estable
   * Aporta valor identificable

---

## Convención de Commits (simplificada)

Formato:

```
type(scope): short description
```

### Tipos permitidos

* **feat** → nueva funcionalidad
* **chore** → setup, tooling, limpieza
* **docs** → documentación

### Reglas

* 1 commit = 1 idea técnica
* Mensajes claros, sin épica
* El valor se comunica en la release, no en el commit

### Ejemplos

```
feat(audio): scan device storage for mp3 files
feat(audio): read basic mp3 metadata
feat(ui): render song list
chore(project): adjust expo config
```

---

## Releases

Cada release debe tener:

* Número de versión
* Nombre
* Lista clara de capacidades nuevas

Ejemplo:

```
v0.0.1 — Local Music Discovery
- Scan device storage
- Detect MP3 files
- Read basic metadata
- Display song list
```

