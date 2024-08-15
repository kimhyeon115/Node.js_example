window.onload = function() {
    
    if (window.opener) {
        const parentId = window.opener.document.getElementById('name').value;
        const parentAge = window.opener.document.getElementById('age').value;
        const parentTel = window.opener.document.getElementById('tel').value;

        document.getElementById('name').value = parentId;
        document.getElementById('age').value = parentAge;
        document.getElementById('tel').value = parentTel;
    }
};