function dropMenu() {
    
    if (document.querySelector('.sidebar').getAttribute('id')) {
        console.log("working1")
        document.querySelector('.sidebar').removeAttribute('id');
        document.querySelector('.sidebar').setAttribute('data', 'sidebar-lift');
        
    } else if (!document.querySelector('.sidebar').getAttribute('id')) {
        console.log("Working")
        document.querySelector('.sidebar').removeAttribute('data');
        document.querySelector('.sidebar').setAttribute('id', 'sidebar-drop');
        
    }
}