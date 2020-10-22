class Dialog {
    constructor(id) {
        this.id = id;
        this.label = 'Title';
        this.controls = [];
        this.buttons = [];
    }

    addAttribute(name, value) {
        if (this.hasOwnProperty(name)) {
            this[name] = value;
            return true;
        }
        return false;
    }

    addControl(control) {
        this.controls.push(control);
    }

    addButton(button) {
        this.buttons.push(button);
    }

    toGtkXml() {
        const id = this.id ? `id="${this.id}"` : '';
        const controls = this.controls.map(c => c.toGtkXml()).join('\n');
        const buttons = this.buttons.map(b => b.toGtkXml()).join('\n');
        return `
<?xml version="1.0" encoding="UTF-8"?>
<interface>
  <requires lib="gtk+" version="3.20"/>
  <object class="GtkDialog" ${id}>
    <property name="can_focus">False</property>
    <property name="title" translatable="yes">${this.label}</property>
    <property name="type_hint">dialog</property>
    <child>
      <placeholder/>
    </child>
    <child internal-child="vbox">
      <object class="GtkBox">
        <property name="can_focus">False</property>
        <property name="orientation">vertical</property>
        <property name="spacing">2</property>
        <child internal-child="action_area">
          <object class="GtkButtonBox">
            <property name="can_focus">False</property>
            <property name="layout_style">end</property>
            <child>
              ${buttons}
            </child>
          </object>
          <packing>
            <property name="expand">False</property>
            <property name="fill">False</property>
            <property name="position">0</property>
          </packing>
        </child>
        <child>
          ${controls}
        </child>
      </object>
    </child>
  </object>
</interface>
`;
    }
}

class Text {
    constructor(id) {
        this.id = id;
        this.label = "Text";
    }

    addAttribute(name, value) {
        if (this.hasOwnProperty(name)) {
            this[name] = value;
            return true;
        }
        return false;
    }

    toGtkXml() {
        const id = this.id ? `id="${this.id}"` : '';
        return `
          <object class="GtkLabel" ${id}>
            <property name="visible">True</property>
            <property name="can_focus">False</property>
            <property name="label" translatable="yes">${this.label}</property>
          </object>
`;
    }
}

class Button {
    constructor(id) {
        this.id = id;
        this.label = "Button";
    }

    addAttribute(name, value) {
        if (this.hasOwnProperty(name)) {
            this[name] = value;
            return true;
        }
        return false;
    }

    toGtkXml() {
        const id = this.id ? `id="${this.id}"` : '';
        return `
              <object class="GtkButton" ${id}>
                <property name="label" translatable="yes">${this.label}</property>
                <property name="visible">True</property>
                <property name="can_focus">True</property>
                <!-- <property name="receives_default">True</property> -->
              </object>
`;
    }
}

exports.Dialog = Dialog;
exports.Text = Text;
exports.Button = Button;
