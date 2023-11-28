import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  columnMapping = {
    'Nome': 'name',
    'Código Barras': 'barCode',
    'Fabricante': 'manufacture',
    'Marca': 'brand',
    'Categoria': 'category',
    'Preço Compra (Unidade)': 'purchasePrice'
  };

  listOfData = [
    {
      name: 'Neosaldina Takeda Caixa 30 Drágeas Embalagem Econômica',
      barCode: '7896641808630',
      manufacture: 'Hypera',
      brand: 'Takeda',
      category: 'Analgésicos',
      purchasePrice: 'R$ 42,48'
    },
    {
      name: 'Novalgina 500mg Sanofi Caixa 30 Comprimidos',
      barCode: '7891058008635',
      manufacture: 'Sanofi Aventis Coml e Logística',
      brand: 'Sanofi',
      category: 'Analgésicos',
      purchasePrice: 'R$ 42,48'
    },
    {
      name: 'Doril Cosmed Caixa 20 Comprimidos',
      barCode: '7896094904675',
      manufacture: 'LAB NEO QUIMICA COM. E IND. LTDA',
      brand: 'Cosmed',
      category: 'Analgésicos',
      purchasePrice: 'R$ 32,48'
    },
    {
      name: 'Tamarine Fibras Kids Morango Zero Açúcar Hypera Frasco 240ml',
      barCode: '7896094916524',
      manufacture: 'HYPERA S A',
      brand: 'Hypera',
      category: 'Regulador Intestinal',
      purchasePrice: 'R$ 50,93'
    },
    {
      name: 'Muvinlax Limão Libbs Caixa 20 Unidades',
      barCode: '7896094201637',
      manufacture: 'LIBBS FARMACEUTICA LTDA',
      brand: 'Libbs',
      category: 'Regulador Intestinal',
      purchasePrice: 'R$ 48,95'
    },
    {
      name: 'Amoxicilina 875mg + Clavulanato de Potássio Ems 125mg 14 Comprimidos',
      barCode: '07896004719597 ',
      manufacture: '',
      brand: '',
      category: 'Genéricos',
      purchasePrice: 'R$ 145,63'
    },
    {
      name: 'Losartana Potássica + Hidroclorotiazida Ems 100 + 25mg 30 Comprimidos',
      barCode: '07896004713915 ',
      manufacture: '',
      brand: '',
      category: 'Genéricos',
      purchasePrice: 'R$ 61,90'
    },
    {
      name: 'Cefalexina Teuto 500mg 40 Comprimidos',
      barCode: '7891058008635',
      manufacture: '',
      brand: '',
      category: 'Genéricos',
      purchasePrice: 'R$ 95,42'
    },
    {
      name: 'Ivermectina 6mg Vitamedic Caixa 4 Comprimidos',
      barCode: '7898049793310',
      manufacture: 'VITAMEDIC',
      brand: 'Vitamedic',
      category: 'Vermicidas',
      purchasePrice: 'R$ 42,48'
    },
    {
      name: 'Saxenda 6mg 3 Doses',
      barCode: '07897705202340 ',
      manufacture: 'Saxenda',
      brand: 'Saxenda',
      category: 'Dietas',
      purchasePrice: 'R$ 686,00'
    }
  ];
}
