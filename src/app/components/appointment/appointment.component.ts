import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  vorname!: string;
  name!: string;
  leistung!: string;
  email!: string;
  message!: string;
  datetime!: string;
  minDateTime: string;
  errorMessage!: string;

  constructor() {
    const today = new Date();
    const threeDaysLater = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));
    this.minDateTime = threeDaysLater.toISOString().slice(0, 16);
  }

  checkInvalidDateTime() {
    const selectedDateTime = new Date(this.datetime);

    // Überprüfen, ob das ausgewählte Datum ein Feiertag, Samstag oder Sonntag ist
    if (this.isHoliday(selectedDateTime) || selectedDateTime.getDay() === 6 || selectedDateTime.getDay() === 0) {
      this.datetime = "";
      this.errorMessage = "Datum außerhalb des zulässigen Bereichs.";
    } else {
      this.errorMessage = "";
    }
  }

  isHoliday(dateTime: Date): boolean {
    // Hier können Sie Ihre eigene Logik einfügen, um Feiertage zu überprüfen
    // Zum Beispiel: if (date === "01.01." || date === "25.12.") { return true; }
    return false;
  }

  submitForm() {
    // Hier können Sie den Code zum Absenden des Formulars implementieren
    console.log("Formular abgesendet!");
  }

  delete(){
    var confirmDelete = window.confirm("Möchten Sie Ihre Daten wirklich löschen?");

    if (confirmDelete) {
      alert("Ihre Daten wurden gelöscht.");
      this.vorname = '';
      this.name = '';
      this.leistung = '';
      this.email = '';
      this.message = '';
      this.datetime = '';
    } else {
      alert("Der Löschvorgang wurde abgebrochen.");
    }
  }
}
