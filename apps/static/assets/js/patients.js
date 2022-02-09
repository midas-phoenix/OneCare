$(document).ready(function () {
    var tblpatient = $('#tblpatient').DataTable();

    tblpatient.on('click', 'tbody tr td a.editdetails', function () {
        var myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('newpatientmodal'));
        var modalTitle = document.querySelector('#newpatientmodalLabel');
        modalTitle.textContent = 'Edit patient account';
        $("#actiontype").val("edit");
        $("#patientno").prop("disabled", true);
        $("#newpatientmodal button[type=submit]").show();
        myModal.show();
    });

    tblpatient.on('click', 'tbody tr td a.viewdetails', function () {
        window.location = "/customer-patientdetails.html?patientno=123456"
    });

    tblpatient.on('click', 'tbody tr td a.suspenduser', function () {
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
                    'Patient account has been suspended.',
                    'success'
                )
            }
        });
    });
    tblpatient.on('click', 'tbody tr td a.deleteuser', function () {
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
                    'Patient account has been deleted.',
                    'success'
                )
            }
        });
    });

    $("#btnnewPatient").on('click', function () {
        var myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('newpatientmodal'));
        var modalTitle = document.querySelector('#newpatientmodalLabel');
        modalTitle.textContent = 'New patient account';
        $("#actiontype").val("new");
        $("#newpatientmodal .modal-body :input").prop("disabled", false);
        $("#newpatientmodal button[type=submit]").show();
        myModal.show();
    });

    $("#newpatientmodal").on("submit", function () {
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
                    'Patient account has been ' + $("#actiontype").val() == "new" ? "Created" : "Modified",
                    'success'
                ).then(data => location.reload());
            }
        });
    });
});