# Organizador de eventos

Podemos organizar nuestros eventos con una fecha específica y dar seguimiento de cada evento añadido.

### Herramientas

- HTML
- CSS
- JAVASCRIPT
- FIGMA
- TRELLO

### App eventos

![Organizador eventos](https://gcdnb.pbrd.co/images/P380yQFJyRqV.png?o=1)

### Código

```Js
    eventsContainer.innerHTML = eventsHTML.join(""); // Une html con un string vacio
    document.querySelectorAll(".bDelete").forEach(button) => {
        button.addEventListener("click", (e) => {
            const id = button.getAttribute("data-id");
            events = events.filter((event) => event.id != id);

            save(JSON.stringify(events));

            renderEvents();
        });
    }
```

_Los eventos serán guardados cada uno con su respectiva fecha o también desechar los eventos no deseados_
