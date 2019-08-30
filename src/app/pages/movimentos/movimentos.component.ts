import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MovimentoService } from 'src/app/services/movimento.service';
import { Observable, Subscription } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MovimentoModel } from 'src/app/model/movimento.model';

@Component({
  selector: 'app-movimentos',
  templateUrl: './movimentos.component.html',
  styleUrls: ['./movimentos.component.scss']
})
export class MovimentosComponent implements OnInit, OnDestroy {

  private movimentosSubscription: Subscription;

  // use async pipe
  movimentos$: Observable<MovimentoModel[]>

  //material table
  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<MovimentoModel>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private movimentoService: MovimentoService) { }

  ngOnInit() {
    this.initComponents();
  }

  ngOnDestroy() {
    this.movimentosSubscription.unsubscribe();
  }

  initComponents() {
    // to use async
    this.movimentos$ = this.movimentoService.getMovimentos();

    this.movimentosSubscription = this.movimentoService.getMovimentosMock().subscribe(resp => {
      this.dataSource = new MatTableDataSource(resp);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
