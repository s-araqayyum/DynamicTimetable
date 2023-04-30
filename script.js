let rows = 0;

$(document).ready(function(){
    $('#addColumn').on('click', function(){
        if($("#startTime").val()=="" || $("#endTime").val()==""){
            alert("You must enter the respective time slots")
        }
        else{
            var newColumnHeader = $("#startTime").val()+" - "+ $("#endTime").val();
            if(newColumnHeader !== null) {
                var newColumn = document.createElement("th");
                newColumn.innerText = newColumnHeader;
                $("#headerRow").append(newColumn);

                $("#startTime").val("")
                $("#endTime").val("")
            }
        }        
    })

    $('#addRow').on('click', function(){

        var numberOfColumns = $('table').find('tr').eq(0).find('th, td').length;
        //         $('table') selects all table elements on the page using jQuery.
        // find('tr') finds all the table row elements (<tr>) within each table.
        // .eq(0) selects the first row of the table.
        // find('th, td') finds all the table header (<th>) and data (<td>) cells within the first row.
        // .length returns the number of header and data cells found, which represents the number of columns in the first row of the table.
        var newRowHeader = prompt("Enter new row:");

        if(newRowHeader !== null) {

            var newRow = $("<tr>").text(newRowHeader).attr('id','r'+rows+'c'+0);

            for(let i = 1; i < numberOfColumns; i++){
                var newData = $('<td>').attr('id', 'Row'+rows+'Column'+i);
                newData.text("❤︎")

                console.log(newData)

                newRow.append(newData);
                console.log(newData)
                console.log(newRow)

                var newOption = document.createElement("option")
                newOption.text = "Row "+rows+", Column "+i;
                console.log(newOption)
                $('#addAgenda').append("<option>"+"Row"+rows+"Column"+i+"</option>");
            }

            rows++;
            $("#bodyOfTable").append(newRow);
        }
    })

    $('#addAgenda').on('change', function(){
        var cell = $("#"+$('#addAgenda').val());
        if (cell.attr('id').endsWith('Column0')) { //Checking if id ends with specific thing, do not change
            alert("You cannot change row headers <3")
          } else {
            var data = prompt("Enter your agenda")
            cell.text(data)
            var buttonID = cell.attr('id')
            var button = $('<button>').attr('id','B'+buttonID).attr('class',"delete").text("Delete")
            $(cell).append(button)

            $("#addAgenda option:contains('" + cell.attr('id') + "')").remove();
          }
    })

    $(document).on('click', '.delete', function() {
        var cellID = $(this).attr('id').slice(1)
        console.log(cellID)
        $("#"+cellID).text("❤︎")

        var newOption = document.createElement("option")
        newOption.text = $(this).attr('id').slice(1);
        $('#addAgenda').append(newOption);
        
    })
})