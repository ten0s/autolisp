class VeDclGtkDialog {
    contructor(dialog) {
        this.dialog = dialog;
    }

    toString() {
        return `
<?xml version="1.0" encoding="UTF-8"?>
<interface>
  <requires lib="gtk+" version="3.20"/>
</interface>
`;
    }
}

exports.VeDclGtkDialog = VeDclGtkDialog;
