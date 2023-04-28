import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminMasterService {
  getImageApi = 'https://carpet.emarketking.in/public/images';
  apiUrl2 = 'http://carpet.emarketking.in/public/api';

  constructor(private http: HttpClient) {}
  //////////////////////
  /////////// here code for  api service
  ///////
  ////
  rawMaterial(data: any): Observable<any> {
    console.log('here data of raw material service  ');
    return this.http.post(this.apiUrl2 + '/raw_material_data', data, {
      headers: new HttpHeaders().set('content-type', 'application/json'),
    });
  }

  getRawMaterial() {
    return this.http.get(this.apiUrl2 + '/raw_material');
  }

  //////////////////////
  /////////// here code for Add Contractor api service
  ///////
  ////
  addContractors(data: any, adharImage: File, panImage: File): Observable<any> {
    debugger;
    const formData = new FormData();
    formData.append('product_name', data.product_name);
    formData.append('group_name', data.group_name);
    formData.append('address', data.address);
    formData.append('state', data.state);
    formData.append('zip_code', data.zip_code);
    formData.append('adhar_no', data.adhar_no);
    formData.append('adhar_image', adharImage, adharImage.name);
    formData.append('pan_no', data.pan_no);
    formData.append('pan_image', panImage, panImage.name);
    // formData.append('contact',data.contact);
    formData.append('ppft', data.ppft);
    // formData.append('adhar_no',data.adhar_no);
    formData.append('viewer_name', data.viewer_name);
    debugger;
    return this.http.post(this.apiUrl2 + '/contractor_data', formData, {
      headers: new HttpHeaders().set('content-type', 'application/json'),
    });
  }

  ledgerAccount(data: any): Observable<any> {
    return data;
  }

  //////////////////////
  /////////// here code for Raw material group api service
  ///////
  ////

  rawMaterialGroup(data: any, matImg: File): Observable<any> {
    const formData = new FormData();

    formData.append('item_name', data.item_name);
    formData.append('description', data.description);
    formData.append('count', data.count);
    formData.append('colour', data.colour);
    formData.append('details', data.details);
    formData.append('mat_image', matImg, matImg.name);

    return this.http.post(this.apiUrl2 + '/raw_material_data', formData, {
      headers: new HttpHeaders().set('accept', 'application/json'),
    });
  }

  getRawMaterialGropu() {
    return this.http.get(this.apiUrl2 + '/raw_material');
  }

  editRawMaterialGroup(data: any) {
    return this.http.get(this.apiUrl2 + '/raw_material_update/' + data);
  }

  updateRawMaterial(apiUri: any, data: any, matImg: File) {
    const formData = new FormData();

    formData.append('item_name', data.item_name);
    formData.append('description', data.description);
    formData.append('count', data.count);
    formData.append('colour', data.colour);
    formData.append('details', data.details);
    formData.append('mat_image', matImg, matImg.name);

    return this.http.post(
      this.apiUrl2 + '/raw_material_edit/' + apiUri,
      formData,
      {
        headers: new HttpHeaders().set('accept', 'application/json'),
      }
    );
  }

  //////////////////////
  /////////// here code for finishing ledger api service
  ///////
  ////

  finishingLedger(
    data: any,
    adharImage: File,
    panImage: File
  ): Observable<any> {
    debugger;

    const formData = new FormData();

    formData.append('group_name', data.group_name);
    formData.append('address', data.address);
    formData.append('state', data.state);
    formData.append('zip_code', data.zip_code);
    formData.append('adhar_no', data.adhar_no);
    formData.append('adhar_image', adharImage, adharImage.name);
    formData.append('pan_no', data.pan_no);
    formData.append(' pan_image', panImage, panImage.name);
    formData.append('contact', data.contact);
    formData.append('email', data.email);
    formData.append('adhar_no', data.adhar_no);
    formData.append('password', data.password);

    console.log(data);
    console.log(formData);
    return this.http.post(this.apiUrl2 + '/finishing_ledger_data', formData, {
      headers: new HttpHeaders().set('accept', 'application/json'),
    });
  }

  getFinisherLedgerData() {
    return this.http.get(this.apiUrl2 + '/finishing_ledger');
  }

  //////////////////////
  /////////// here code for SizeMaster api service
  ///////
  ////

  sizeMaster(data: any): Observable<any> {
    debugger;
    return this.http.post(this.apiUrl2 + '/size_master_data', data, {
      headers: new HttpHeaders().set('content-type', 'application/json'),
    });
  }

  getSizeMaster() {
    return this.http.get(this.apiUrl2 + '/size_master');
  }

  getSizeById(_id: any) {
    return this.http.get(this.apiUrl2 + '/size_master_update/' + _id);
  }

  updateSizeMaster(_id: any, data: any) {
    return this.http.post(this.apiUrl2 + '/size_master_edit/' + _id, data, {
      headers: new HttpHeaders().set('content-type', 'application/json'),
    });
  }

  //////////////////////
  /////////// here code for BuyerMaster api service
  ///////
  ////

  buyerMaster(data: any) {
    debugger;
    console.log(data);
    return this.http.post(this.apiUrl2 + '/buyer_details', data, {
      headers: new HttpHeaders().set('ContentType', 'application/json'),
    });
  }
  getBuyerMaster() {
    return this.http.get(this.apiUrl2 + '/buyer');
  }
  editBuyerMaster(data: any) {
    debugger;
    console.log(data);
    return this.http.get(this.apiUrl2 + '/buyer_update/' + data);
  }

  updateBuyerMaster(apiUri: any, data: any) {
    debugger;
    console.log(data);
    return this.http.post(this.apiUrl2 + '/buyer_edit/' + apiUri, data, {
      headers: new HttpHeaders().set('ContentType', 'application/json'),
    });
  }

  //////////////////////
  /////////// here code for Dying Master api service
  ///////
  ////
  dyingMaster(data: any) {
    debugger;
    console.log(data);
    return this.http.post(this.apiUrl2 + '/dying_master', data, {
      headers: new HttpHeaders().set('content-type', 'application/json'),
    });
  }

  getDyingMaster() {
    return this.http.get(this.apiUrl2 + '/dying_master_data');
    // return this.http.get(this.apiUrl2+'/size_master');
  }

  tokens: any =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiIxOTk2YWpheXBhdGVsOTkzQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IkF1WG5GakVTNDNOcWJkT0Rab2MxYW5MdHBPOW9wXzlIc0E3aHFVNTZISm94bGJiTnJNc1VBem1zcDZjcW9aMEhoV1EifSwiZXhwIjoxNjgwODU3MzI2fQ.wgGkhZTF1aNdRdT4PDicRRwQTtIdJpGXD7lq5U8G25c';
  citie() {
    return this.http.get(
      'https://www.universal-tutorial.com/api/cities/bihar',
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.tokens}`
        ),
      }
    );
  }

  //////////////////////
  /////////// here code for purchaser Ledger api service
  ///////
  ////

  purchser(data: any) {
    return this.http.post(this.apiUrl2 + '/contractor_staff_fn_ledger', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  //////////////////////
  /////////// here code for Add Quality api service
  ///////
  ////

  quality(data: any) {
    return this.http.post(this.apiUrl2 + '/quality_data', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  getQuality() {
    return this.http.get(this.apiUrl2 + '/quality');
  }

  getQualityById(_id: any) {
    return this.http.get(this.apiUrl2 + '/quality_data_update/' + _id);
  }

  updateQuality(_uri: any, data: any) {
    return this.http.post(this.apiUrl2 + '/quality_data_edit/' + _uri, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  deleteQuality(_id: any) {
    return this.http.delete(this.apiUrl2 + '/quality_data_delete/' + _id);
  }

  //////////////////////
  /////////// here code for contractor leadger account api service
  ///////
  ////

  addContractor(data: any, pan: any, adhar: any, esic: any, epfo: any) {
    debugger;
    const formData = new FormData();
    formData.append('groupName', data.groupName);
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('state', data.state);
    formData.append('city', data.city);

    formData.append('country', data.country);
    formData.append('zipCode', data.zipCode);
    formData.append('adharNo', data.adharNo);
    formData.append('adharImage', adhar, adhar.name);
    formData.append('panNo', data.panNo);
    formData.append('panImage', pan, pan.name);
    formData.append('epfoNo', data.epfoNo);
    formData.append('epfoSheet', epfo, epfo.name);
    formData.append('esicNo', data.esicNo);
    formData.append('esicSheet', esic, esic.name);
    formData.append('email', data.email);
    formData.append('password', data.password);

    return this.http.post(
      this.apiUrl2 + '/contractor_staff_fn_ledger',
      formData,
      {
        headers: new HttpHeaders().set('Accept', 'application/json'),
      }
    );
  }

  getContractor() {
    return this.http.get(this.apiUrl2 + '/contractor_finishing_ledger');
  }

  //////////////////////////
  ////////////
  ////// here i am use this api for purchase ledger account
  ////

  addPurchaseAccount(data: any) {
    return this.http.post(this.apiUrl2 + '/purchase_ledger_account', data, {
      headers: new HttpHeaders().set('Accept', 'application/json'),
    });
  }

  getPurchaseLedger() {
    return this.http.get(this.apiUrl2 + '/purchase_ledger');
  }

  getPurchaseLedgerById(_id: any) {
    return this.http.get(this.apiUrl2 + '/purchase_ledger_update/' + _id);
  }

  updatePurchaseLedger(apiUri: any, data: any) {
    return this.http.post(
      this.apiUrl2 + '/purchase_ledger_edit/' + apiUri,
      data,
      {
        headers: new HttpHeaders().set('accept', 'application/json'),
      }
    );
  }
  //////////////////////////
  ////////////
  ////// here i am use this api for Design master
  ////

  addDesign(data: any) {
    return this.http.post(this.apiUrl2 + '/design_data', data, {
      headers: new HttpHeaders().set('Accept', 'application/json'),
    });
  }

  getDesignList() {
    return this.http.get(this.apiUrl2 + '/design');
  }

  getDesignById(_id: any) {
    return this.http.get(this.apiUrl2 + '/design_update/' + _id);
  }
  updateDesign(_uri: any, data: any) {
    return this.http.post(this.apiUrl2 + '/design_edit/' + _uri, data, {
      headers: new HttpHeaders().set('accept', 'application/json'),
    });
  }
  //////////////////////////
  ////////////
  ////// here i am use this api for Shade Card master
  ////

  addShadeCard(data: any) {
    debugger;
    return this.http.post(this.apiUrl2 + '/shead_card_data', data, {
      headers: new HttpHeaders().set('Accept', 'application/json'),
    });
  }

  getShadeCardList() {
    return this.http.get(this.apiUrl2 + '/shead_card');
  }

  getShadeCardWithId(_id: any) {
    return this.http.get(this.apiUrl2 + '/shead_card_update/' + _id);
  }

  updateShadeCard(uriID: any, data: any) {
    debugger;
    return this.http.post(this.apiUrl2 + '/shead_card_edit/' + uriID, data, {
      headers: new HttpHeaders().set('Accept', 'application/json'),
    });
  }
  //////////////////////////
  ////////////
  ////// here i am use this api for Finishing Head
  ////
  addFinishingHead(data: any) {
    debugger;
    return this.http.post(this.apiUrl2 + '/job_name_data', data, {
      headers: new HttpHeaders().set('Accept', 'application/json'),
    });
  }
  getFinishingHeadList() {
    return this.http.get(this.apiUrl2 + '/job_name');
  }

  //////////////////////////
  ////////////
  ////// here i am use this api for colour code with dyeing details
  ////

  colourCodeDyingDetails(data: any): Observable<any> {
    debugger;
    return this.http.post(this.apiUrl2 + '/colour_code_dyis_data', data, {
      headers: new HttpHeaders().set('content-type', 'application/json'),
    });
  }
  colourCodeDyingReciepeDetails(data: any): Observable<any> {
    debugger;
    console.log(data.frmReciepeArray);
    return this.http.post(
      this.apiUrl2 + '/colour_code_dyieng_data_details',
      data,
      {
        headers: new HttpHeaders().set('content-type', 'application/json'),
      }
    );
  }

  //////////////////////////
  ////////////
  ////// here i am use this api for finishing process
  ////

  addFinishingProcess(data: any) {
    debugger;
    return this.http.post(this.apiUrl2 + '/finishing_process_data', data, {
      headers: new HttpHeaders().set('Accept', 'application/json'),
    });
  }
  //////////////////////////
  ////////////
  ////// here i am use this api for buyer order
  ////
  addBuyerOrder(data: any) {
    debugger;
    return this.http.post(this.apiUrl2 + '/buyer_order_data', data, {
      headers: new HttpHeaders().set('Accept', 'application/json'),
    });
  }

  getBuyerOrder() {
    return this.http.get(this.apiUrl2 + '/buyer_order');
  }

  getEmployeeById(_id: any) {
    return this.http.get(
      this.apiUrl2 + '/contractor_finishing_ledger_update/' + _id
    );
  }



  addBranch(data:any){
    return this.http.post(this.apiUrl2+'/branch_data',data,{
      headers:new HttpHeaders().set('accept','application/json')
    })
  }

  getBranch(){
    return this.http.get(this.apiUrl2+'/branch');
  }

  addCarpetStock(data:any){
    return this.http.post(this.apiUrl2+'/stocks_data',data,{
      headers: new HttpHeaders().set('accept','application/json')
    })
  }

  getCarpetStock(){
    return this.http.get(this.apiUrl2+'/stock');
  }
}
