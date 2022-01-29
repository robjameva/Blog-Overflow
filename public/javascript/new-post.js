async function newPostBtnHandler(event) {
    event.preventDefault();

    document.location.replace('/dashboard/new_post');
}

document.querySelector('#new_post').addEventListener('click', newPostBtnHandler);