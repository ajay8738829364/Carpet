import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { importerAddress } from '../model/importerAddress';
import { qualityDesign } from '../model/quality&design';
import { kotiCustomer } from '../model/kotiCustomer';
import { codingDetial } from '../model/codingDetails';
import { containerReceived } from '../model/containerReceived';

@Injectable({
  providedIn: 'root',
})
export class KotiService {
  // apiUrl = 'http://carpet.emarketking.in/public/api/koti';
  apiUrl = 'http://127.0.0.1:4000/api';

  constructor(private httpClient: HttpClient) {}

  headers = new HttpHeaders().set('accept', 'application/json');

  codingDetails: codingDetial[] = [];

  importerAddress(data: any): Observable<importerAddress> {
    return this.httpClient.post<importerAddress>(
      this.apiUrl + '/importerAddress',
      data,
      {
        headers: this.headers,
      }
    );
  }

  getImporterAddress(): Observable<importerAddress> {
    return this.httpClient.get<importerAddress>(
      this.apiUrl + '/getImporterDetails'
    );
  }

  getImporterById(id: any): Observable<importerAddress> {
    debugger;
    return this.httpClient.get<importerAddress>(
      this.apiUrl + '/getImporterDetail/' + id
    );
  }
  //importer_delete

  updateImporter(data: importerAddress, id: any): Observable<importerAddress> {
    return this.httpClient.patch<importerAddress>(
      this.apiUrl + '/updateImporterAddress/' + id,
      data,
      {
        headers: this.headers,
      }
    );
  }
  deleteImporterAddress(id: any): Observable<any> {
    return this.httpClient.delete<any>(
      this.apiUrl + '/deleteImporterDetail/' + id
    );
  }
  qualityDesign(data: any, file: File): Observable<qualityDesign> {
    debugger;

    const formData = new FormData();

    formData.append('design', data.design);
    formData.append('colour', data.colour);
    formData.append('size', data.size);

    formData.append('file', file, file.name);

    return this.httpClient.post<qualityDesign>(
      this.apiUrl + '/addQuality&design',
      formData,
      {
        headers: this.headers,
      }
    );
  }

  getQualityDesign(): Observable<qualityDesign> {
    return this.httpClient.get<qualityDesign>(
      this.apiUrl + '/getQualityDesigns'
    );
  }

  getQualityDesignById(id: any): Observable<qualityDesign> {
    return this.httpClient.get<qualityDesign>(
      this.apiUrl + '/getQualityDesign/' + id
    );
  }
  updateQualityDesign(
    data: any,
    id: any,
    file: File
  ): Observable<qualityDesign> {
    debugger;

    const formData = new FormData();

    formData.append('design', data.design);
    formData.append('colour', data.colour);
    formData.append('size', data.size);

    formData.append('file', file, file.name);

    return this.httpClient.patch<qualityDesign>(
      this.apiUrl + '/updateQuality&design/' + id,
      formData,
      { headers: this.headers }
    );
  }
  deleteQualityDesign(id: any): Observable<any> {
    return this.httpClient.delete<any>(
      this.apiUrl + '/deleteQualityDesign/' + id
    );
  }

  addKotiCustomer(data: kotiCustomer): Observable<kotiCustomer> {
    return this.httpClient.post<kotiCustomer>(
      this.apiUrl + '/addCustomer',
      data,
      { headers: this.headers }
    );
  }

  getKotiCustomer(): Observable<kotiCustomer> {
    return this.httpClient.get<kotiCustomer>(this.apiUrl + '/getCustomers');
  }

  getCustomerById(id: any): Observable<kotiCustomer> {
    return this.httpClient.get<kotiCustomer>(
      this.apiUrl + '/getCustomer/' + id
    );
  }

  updateCustomer(data: kotiCustomer, id: any): Observable<kotiCustomer> {
    return this.httpClient.patch<kotiCustomer>(
      this.apiUrl + '/updateCustomer/' + id,
      data,
      {
        headers: this.headers,
      }
    );
  }
  deleteCustomer(id: any): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + '/deleteCustomer/' + id);
  }

  addCodingDetail(data: codingDetial): Observable<codingDetial[]> {
    return this.httpClient.post<codingDetial[]>(
      this.apiUrl + '/addCodingDetail',
      data,
      { headers: this.headers }
    );
  }

  getCodingDetails(): Observable<codingDetial[]> {
    debugger;
    return this.httpClient.get<codingDetial[]>(
      this.apiUrl + '/getCodingDetails'
    );
  }

  updateCodingDetail(data: codingDetial, id: any): Observable<codingDetial> {
    debugger;
    return this.httpClient.patch<codingDetial>(
      this.apiUrl + '/updateCodingDetail/' + id,
      data,
      { headers: this.headers }
    );
  }

  getCodeingDetailById(id: any): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + '/getCodingDetail/' + id);
  }

  deleteQuality(id: any): Observable<any> {
    return this.httpClient.delete<any>(
      this.apiUrl + '/deleteCodingDetail/' + id
    );
  }

  containerReceived(data: any, file: File): Observable<containerReceived> {
    debugger;

    const formData = new FormData();

    formData.append('espPrice', data.espPrice);
    formData.append('importerNumber', data.importerNumber);
    formData.append('expenseAmount', data.expenseAmount);
    formData.append('totalMeter', data.totalMeter);
    formData.append('file', file, file.name);

    return this.httpClient.post<containerReceived>(
      this.apiUrl + '/addContainerReceived',
      formData,
      {
        headers: this.headers,
      }
    );
  }

  getContainerReceived(): Observable<containerReceived> {
    return this.httpClient.get<containerReceived>(
      this.apiUrl + '/getContainerDetails'
    );
  }

  getContainerReceivedById(id: any): Observable<containerReceived> {
    return this.httpClient.get<containerReceived>(
      this.apiUrl + '/getContainerDetail/' + id
    );
  }
  updateContainerReceived(
    data: any,
    id: any,
    file: File
  ): Observable<containerReceived> {
    debugger;

    const formData = new FormData();

    formData.append('espPrice', data.espPrice);
    formData.append('importerNumber', data.importerNumber);
    formData.append('expenseAmount', data.expenseAmount);
    formData.append('totalMeter', data.totalMeter);
    formData.append('file', file, file.name);

    return this.httpClient.patch<containerReceived>(
      this.apiUrl + '/updateContainerDetail/' + id,
      formData,
      {
        headers: this.headers,
      }
    );
  }

  deleteContainerReceived(id: any): Observable<containerReceived> {
    return this.httpClient.delete<containerReceived>(
      this.apiUrl + '/deleteContainerDetail/' + id
    );
  }

  getExcelData(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/getExcelData');
  }
}
