const render = root => {
    root.empty();
    const section = $('<section class="components"></section>');
    if (state.nextPage === null) {
        section.append(Header());
    } else {
        section.append(state.nextPage(() => render(root)));
    }
    root.append(section);
}

const state = {
    nextPage : null
}

$( () =>{
    const root = $('#root');
    render(root);
})