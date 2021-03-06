/*
<section fxLayout="row wrap">
  <article
    *ngFor="let product of products"
    fxFlex="33.33%"
    fxFlex.lt-md="50%"
    fxFlex.lt-sm="100%"
    fxLayoutGap="10px"
  >
    <mat-card class="example-card">
      <ng-container *ngIf="product?.productImage?.fileUrl">
        <img
          mat-card-image
          [src]="
            domSanitizer.bypassSecurityTrustResourceUrl(
              product.productImage.fileUrl
            )
          "
          alt="Photo of a Shiba Inu"
        />
      </ng-container>
      <mat-card-content>
        <h4>
          <b>{{ product.name }}</b>
        </h4>
        <div fxLayout="row" fxLayoutAlign="space-between center">
          <div>{{ product.description }}</div>
          <div>
            <b>{{ product.unitPrice | currency: "&#8377;" }}</b>
          </div>
        </div>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>VIEW</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>
  </article>
  <article
    fxFlex="33.33%"
    fxFlex.lt-md="50%"
    fxFlex.lt-sm="100%"
    class="lastarticle"
  >
    <h1>Checkout more medicines!</h1>
    <button mat-raised-button color="primary">More Products</button>
  </article>
</section>
*/
