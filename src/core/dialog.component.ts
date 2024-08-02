import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  template: `
    <h1 mat-dialog-title>Ngx Stripe</h1>
    <div mat-dialog-content>
      {{ data.type | uppercase }}: {{ data.message }}
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onClose()">OK</button>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class NgxStripeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NgxStripeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: 'error' | 'success'; message?: string }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
