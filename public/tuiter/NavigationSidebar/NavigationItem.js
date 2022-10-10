const NavigationItem = (navigation, active) => {
    let styling = "list-group-item list-group-item-action d-inline-flex";
    if (navigation.name.toLowerCase().includes(active.toLowerCase())) {
        styling = styling.concat(" bg-primary")
    }
    return (`
        <a href="${navigation.link}" class="${styling}"> 
            <i class="${navigation.icon} pt-1"></i><span class="d-none d-xl-block">&nbsp;&nbsp;${navigation.name}</span>
        </a>
    `);
}

export default NavigationItem;