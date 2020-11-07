import { HeaderService } from "./../../template/header/header.service";
import { Product } from "./../product.model";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  products: Product[];
  displayedColumns = ["id", "name", "price", "action"];

  constructor(
    private productService: ProductService,
    headerService: HeaderService
  ) {
    headerService.headerData = {
      title: "Products",
      icon: "storefront",
      routeUrl: "/products",
    };
  }

  ngOnInit(): void {
    this.productService
      .read()
      .subscribe((products) => (this.products = products));
  }
}
