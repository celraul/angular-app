import {
    MatButtonModule, MatCheckboxModule, MatInputModule, MatDividerModule, MatListModule,
    MatExpansionModule, MatStepperModule, MatBottomSheetModule, MatButtonToggleModule,
    MatDatepickerModule, MatIconModule, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

const CUSTOM_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MM YYYY',
    },
};

@NgModule({
    imports: [
        MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule,
        MatDividerModule, MatListModule, MatExpansionModule, MatStepperModule,
        MatBottomSheetModule, MatButtonToggleModule, MatDatepickerModule,
        MatIconModule, MatDialogModule, MatTableModule, MatPaginatorModule,
        MatTooltipModule
    ],
    exports: [
        MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule,
        MatDividerModule, MatListModule, MatExpansionModule, MatStepperModule,
        MatBottomSheetModule, MatButtonToggleModule, MatDatepickerModule,
        MatIconModule, MatDialogModule, MatTableModule, MatPaginatorModule,
        MatTooltipModule
    ],
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: CUSTOM_FORMATS }
    ]
})
export class MaterialModule { }
