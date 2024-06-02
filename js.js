window.addEventListener("keydown", event => {
    if (event.keyCode == '72') {
        ModAPI.displayToChat({
            msg: ((ModAPI.getdisplayHeight() == ModAPI.getdisplayHeight()) && (ModAPI.getdisplayWidth() == ModAPI.getdisplayWidth()))
        });
    }
});