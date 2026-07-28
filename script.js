function searchNotes() {

    let input = document.getElementById("searchBox");

    let filter = input.value.toLowerCase();

    let ul = document.getElementById("notesList");

    let li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {

        let a = li[i].getElementsByTagName("a")[0];

        let txtValue = a.textContent || a.innerText;

        if (txtValue.toLowerCase().indexOf(filter) > -1) {

            li[i].style.display = "";

        } else {

            li[i].style.display = "none";
        }
    }
}
