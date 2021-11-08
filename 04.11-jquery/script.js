//Basic functions.
//Lets think what we need to do
//Add event listner to add button.
//catch name field.
//catch phone fields.
//build an elment 
//append element to dom.
//reset input field

// Remove function.
//Add button. - Done
//Add event listner to that button - Done.
// Remove element from dom.


//Edit Function
//Add edit button button.
//Add event listner to that button.
//Add two inputs and a button.
//Take value from p.
//Add button thats updateing the value.
//Add event listner to this button.
//Take value from edit inputs.
//Remove edit inputs.
$(function() {
 function catchNameField(){
    return $("[data-role=userName]").val();
 }

 function catchNamePhone(){
    return $("[data-role=phone]").val();
 }
 function createHtmlElement(name, phone){
    let div = $('<div>');
    let pName = $('<p data-role="contact-name">');
    let pPhone = $('<p data-role="contact-phone">');
    let addButton = $('<button>')
    addButton.text("Remove")
    addButton.click(function(){
        $(this).parent().remove();
    });
    let editButton = $('<button>')
    editButton.text("Edit")
    editButton.click(function(){
        let editName = $('<input type="text">');
        let editPhone = $('<input>');
        editPhone.attr('type', 'tel');
        editName.val($(this).siblings("p[data-role=contact-name]").text());
        editPhone.val($(this).siblings("p[data-role=contact-phone]").text());
        $(this).parent().append(editName)
        $(this).parent().append(editPhone)
        
    });
    pName.text(name);
    pPhone.text(phone);
    div.append(pName)
    div.append(pPhone)
    div.append(addButton)
    div.append(editButton)
    $("[data-role=contacts-container]").append(div)
    // resetFields($("[data-role=userName],[data-role=phone]"));
    // resetFields($("input"));
    resetFields();
}

 function resetFields(){
     $('input').val("")
 }
    $("[data-role=add-contact-btn]").click(function(){
        let name = catchNameField();
        let phone = catchNamePhone();
        if (!name){
            alert("Name cant be blank")
            return
        } else if (!phone) {
            alert("phone cant be blank")
            return
        }
        createHtmlElement(name,phone)
    })
});