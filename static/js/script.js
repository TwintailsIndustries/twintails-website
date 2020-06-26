$(document).on('change', '.checkbox', function() {
    alert("hello world");
    if(this.checked.class == "lorem-ipsum") {
        $(".hex.lorem-ipsum").toggle(this.checked);
    }
});