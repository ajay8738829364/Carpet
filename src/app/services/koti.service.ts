import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { importerAddress } from '../model/importerAddress';
import { qualityDesign } from '../model/quality&design';
import { kotiCustomer } from '../model/kotiCustomer';
import { codingDetial } from '../model/codingDetails';

@Injectable({
  providedIn: 'root',
})
export class KotiService {
  apiUrl = 'http://carpet.emarketking.in/public/api/koti';
  constructor(private httpClient: HttpClient) {}

  headers = new HttpHeaders().set('accept', 'application/json');

  codingDetails:codingDetial[]=[];






  importerAddress(data: any): Observable<importerAddress> {
    return this.httpClient.post<importerAddress>(
      this.apiUrl + '/master/importer_data',
      data,
      {
        headers: this.headers,
      }
    );
  }

  getImporterAddress(): Observable<importerAddress> {
    return this.httpClient.get<importerAddress>(
      this.apiUrl + '/master/importer'
    );
  }

  getImporterById(_id: any): Observable<importerAddress> {
    return this.httpClient.get<importerAddress>(
      this.apiUrl + '/master/importer_edit/' + _id
    );
  }
  //importer_delete

  updateImporter(data: importerAddress, _id: any): Observable<importerAddress> {
    return this.httpClient.post<importerAddress>(
      this.apiUrl + '/master/importer_update/' + _id,
      data,
      {
        headers: this.headers,
      }
    );
  }
  deleteImporterAddress(_id: any): Observable<any> {
    return this.httpClient.delete<any>(
      this.apiUrl + '/master/importer_delete/' + _id
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
      this.apiUrl + '/master/quality_design_data',
      formData,
      {
        headers: this.headers,
      }
    );
  }

  getQualityDesign(): Observable<qualityDesign> {
    return this.httpClient.get<qualityDesign>(
      this.apiUrl + '/master/quality_design'
    );
  }

  getQualityDesignById(_id: any): Observable<qualityDesign> {
    return this.httpClient.get<qualityDesign>(
      this.apiUrl + '/master/quality_design_edit/' + _id
    );
  }
  updateQualityDesign(
    data: any,
    _id: any,
    file: File
  ): Observable<qualityDesign> {
    debugger;

    const formData = new FormData();

    formData.append('design', data.design);
    formData.append('colour', data.colour);
    formData.append('size', data.size);

    formData.append('file', file, file.name);

    return this.httpClient.post<qualityDesign>(
      this.apiUrl + '/master/quality_design_update/' + _id,
      formData,
      { headers: this.headers }
    );
  }
  deleteQualityDesign(_id: any): Observable<any> {
    return this.httpClient.delete<any>(
      this.apiUrl + '/master/quality_design_delete/' + _id
    );
  }

  addKotiCustomer(data: kotiCustomer): Observable<kotiCustomer> {
    return this.httpClient.post<kotiCustomer>(
      this.apiUrl + '/master/customer_data',
      data,
      { headers: this.headers }
    );
  }

  getKotiCustomer(): Observable<kotiCustomer> {
    return this.httpClient.get<kotiCustomer>(this.apiUrl + '/master/customer');
  }

  getCustomerById(_id: any): Observable<kotiCustomer> {
    return this.httpClient.get<kotiCustomer>(
      this.apiUrl + '/master/customer_edit/' + _id
    );
  }

  updateCustomer(data: kotiCustomer, _id: any): Observable<kotiCustomer> {
    return this.httpClient.post<kotiCustomer>(
      this.apiUrl + '/master/customer_update/' + _id,
      data,
      {
        headers: this.headers,
      }
    );
  }
  deleteCustomer(_id: any): Observable<any> {
    return this.httpClient.delete<any>(
      this.apiUrl + '/master/customer_delete/' + _id
    );
  }

  addCodingDetail(data: codingDetial): Observable<codingDetial[]> {
    return this.httpClient.post<codingDetial[]>(
      this.apiUrl + '/master/coding_detail_data',
      data,
      { headers: this.headers }
    );
  }

  getCodingDetails(): Observable<codingDetial[]> {
    return this.httpClient.get<codingDetial[]>(
      this.apiUrl + '/master/coding_detail'
    );
  }

  updateCodingDetail(data: codingDetial, _id: any): Observable<codingDetial> {
    return this.httpClient.post<codingDetial>(
      this.apiUrl + '/master/coding_detail_update/' + _id,
      data,
      { headers: this.headers }
    );
  }

  getCodeingDetailById(_id: any): Observable<any> {
    return this.httpClient.get<any>(
      this.apiUrl + '/master/coding_detail_edit/' + _id
    );
  }

  deleteQuality(_id: any): Observable<any> {
    return this.httpClient.delete<any>(
      this.apiUrl + '/master/coding_detail_delete/' + _id
    );
  }

  getDesign(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + '/master/koti_design');
  }

  getColour(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + '/master/koti_colour');
  }

  getSize(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + '/master/koti_size');
  }
}
