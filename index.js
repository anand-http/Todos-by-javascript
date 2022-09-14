


    function getandupdate() {
        tit = document.getElementById('title').value;
    desc = document.getElementById("desc").value;
    if (!tit || !desc ) {
        alert(
            "Title and description can`t be empty"

        )
    }
    else {



                if (localStorage.getItem('itemsJson') == null) {

        itemjsonArray = []
                    itemjsonArray.push([tit, desc])

    localStorage.setItem('itemsJson', JSON.stringify(itemjsonArray))
                }
    else {
        itemjsonArraystr = localStorage.getItem('itemsJson')
                    itemjsonArray = JSON.parse(itemjsonArraystr);
    itemjsonArray.push([tit, desc])
    localStorage.setItem("itemsJson", JSON.stringify(itemjsonArray))
                }
    update();

            }

        }

    function update() {

            if (localStorage.getItem('itemsJson') == null) {

        itemjsonArray = []
                localStorage.setItem('itemsJson', JSON.stringify(itemjsonArray))
            }
    else {
        itemjsonArraystr = localStorage.getItem('itemsJson')
                itemjsonArray = JSON.parse(itemjsonArraystr);
            }



    let tableBody = document.getElementById('tableBody');
    let str = "";

            itemjsonArray.forEach((element, index) => {
        str += `

                <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td>
                    </tr>
                `
    });

    tableBody.innerHTML = str;

        }


    let add = document.getElementById('add');
    add.addEventListener("click", getandupdate);
    update();

    function deleted(item) {
        console.log("delete", item)
            itemjsonArraystr = localStorage.getItem('itemsJson')
    itemjsonArray = JSON.parse(itemjsonArraystr);

    itemjsonArray.splice(item, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemjsonArray));
    update();
        }


    function clearstorage() {
            if (confirm("Do you really want to Clear the whole list of your todos?")) {

        localStorage.clear();
    update();
            }
        }

