let counter = 0;
let contacts = [];
function addContact(name, phone) {
    let id = ++counter
    contacts.push({
        name,
        phone,
        id
    });
    return id;
}

function createHtmlElement(name, phone) {
    let contactId = addContact(name, phone);
    let pName = $(`<p data-contact-id=${contactId} data-role="contact-name">${name}<p>`);
    let pPhone = $(`<p data-contact-id=${contactId} data-role="contact-phone">${phone}<p>`);
    let removeButton = $('<button>Remove</button>').click(function () {
        $(this).parent().remove();
    });
    let editButton = $('<button>Edit</button>').click(function () {
        let editName = $(`<input type="text" value=${$(this).siblings("p[data-role=contact-name]").text()}>`)
        let editPhone = $(`<input type="tel"  value=${$(this).siblings("p[data-role=contact-phone]").text()}>`);
        let updateButton = $(`<button >Update</button>`)
        updateButton.click(function () {
            updateContact(contactId, editName.val(), editPhone.val(), updateButton);
            editName.remove()
            editPhone.remove();
            updateButton.remove()
        });
        $(this).parent().append([editName, editPhone, updateButton])
    });
    $("[data-role=contacts-container]").append($('<div>').append([pName, pPhone, removeButton, editButton]))
    $('input').val("")
}
function updateContact(id, name, phone, updateButton) {
    $.each(contacts, function (i, contact) {
        if (contact.id === id) {
            updateUIContact(contact);
        }
    })
    function updateUIContact(contact) {
        console.log(updateButton);
        contact.name = name;
        contact.phone = phone;
        $(`[data-contact-id=${id}][data-role="contact-name"]`).text(name);
        $(`[data-contact-id=${id}][data-role="contact-phone"]`).text(phone);
    }
}
$("[data-role=add-contact-btn]").click(function () {
    const name = $("[data-role=userName]").val(), phone = $("[data-role=phone]").val();
    if (!name || !phone) {
        alert("please fill the fields..");
        return;
    }
    createHtmlElement(name, phone)
})

// setTimeout(function () {
//     $.getJSON("https://raw.githubusercontent.com/blackcolt/hackerU/main/contacts.json",
//     function (contacts) {
//         parseContacts(contacts);
//     })
// }, 1000)

// function parseContacts(contacts){
//     $.each(contacts,function(_, contact){
//         createHtmlElement(contact.name, contact.phone)
//     });
// }
