import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuanLyPhimService {
  constructor(private httpClient: HttpClient) {}

  layDanhSachPhim(): Observable<any> {
    let result = this.httpClient.get(
      `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`
    );
    return result;
  }
}
