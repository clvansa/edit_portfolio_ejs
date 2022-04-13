const remove_tag = (id, e) => {

    const element = document.getElementById(`${id}`);
    e.preventDefault()
    element.parentNode.remove()
}


const open_modal = (id) => {
    if (id === 'add_new') {
        const modal = document.getElementById("add_new");
        modal.style.display = "block"
        modal.classList.add('show')
    } else {

        const modal = document.querySelector(`#modal-edit-${id}`);

        modal.style.display = "block"
        modal.classList.add('show')
    }
}


const close_modal = (id) => {
    if (id === 'add_new') {
        const modal = document.getElementById("add_new");
        modal.style.display = "none"
        modal.classList.remove('show')
    } else {

        const modal = document.querySelector(`#modal-edit-${id}`);
        modal.style.display = "none"
        modal.classList.remove('show')
    }
}

const add_tags = (id, event) => {
    event.preventDefault()
    let tags;
    if (id === 'add_new') {
        tags = document.getElementById("tags-add_new");
    } else {
        tags = document.querySelector(`.tags-${id}`)

    }
    let ids = tags.childElementCount + 1;
    tags.innerHTML += `<div class="mb-1 d-flex">
<input type="text" name="tags" class="form-control" id="tag" placeholder="Tag" value="">
<button type="button" id="${ids}" class="btn btn-danger ms-1" onClick="remove_tag(this.id,event)">-</button>
</div>`
}

const delete_submitting = (id) => {
    console.log('sub', id)
    const modalSubmitting = document.getElementById(`modal-submitting-${id}`)
    console.log(modalSubmitting)
    modalSubmitting.style.display = "block ";
    modalSubmitting.classList.add('show')
}

const modal_submitting_close = (id) => {
    const modalSubmitting = document.getElementById(`modal-submitting-${id}`)
    modalSubmitting.style.display = "none"
    modalSubmitting.classList.remove('show')
}