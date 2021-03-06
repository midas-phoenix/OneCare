$(document).ready(function () {
    var tblstaff = $('#tblstaff').DataTable();

    tblstaff.on('click', 'tbody tr td a.editdetails', function () {
        var myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('newstaffmodal'));
        var modalTitle = document.querySelector('#newstaffmodalLabel');
        modalTitle.textContent = 'Edit staff account';
        $("#actiontype").val("edit");
        $("#staffno").prop("disabled", true);
        $("#newstaffmodal button[type=submit]").show();
        myModal.show();
    });

    tblstaff.on('click', 'tbody tr td a.viewdetails', function () {
        var myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('newstaffmodal'));
        var modalTitle = document.querySelector('#newstaffmodalLabel');
        modalTitle.textContent = 'staff account details';

        $("#newstaffmodal .modal-body :input").prop("disabled", true);
        $("#newstaffmodal button[type=submit]").hide();
        myModal.show();
    });

    tblstaff.on('click', 'tbody tr td a.suspenduser', function () {
        Swal.fire({
            title: 'Suspend User',
            text: "Are you sure?, user will no longer be allowed to login to the system!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Staff account has been suspended.',
                    'success'
                )
            }
        });
    });
    tblstaff.on('click', 'tbody tr td a.deleteuser', function () {
        Swal.fire({
            title: 'Delete User',
            text: "Are you sure?, You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Staff account has been deleted.',
                    'success'
                )
            }
        });
    });

    $("#btnnewStaff").on('click', function () {
        var myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('newstaffmodal'));
        var modalTitle = document.querySelector('#newstaffmodalLabel');
        modalTitle.textContent = 'New staff account';
        $("#actiontype").val("new");
        $("#newstaffmodal .modal-body :input").prop("disabled", false);
        $("#newstaffmodal button[type=submit]").show();
        myModal.show();
    });

    $("#newstaffmodal").on("submit", function () {
        event.preventDefault();
        Swal.fire({
            title: "Confirm " + $("#actiontype").val() == "new" ? "Creation" : "Modification" + ' of Account',
            // text: "Are you sure?, You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Submit'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Successful!',
                    'Staff account has been ' + $("#actiontype").val() == "new" ? "Created" : "Modified",
                    'success'
                ).then(data => location.reload());
            }
        });
    });
});