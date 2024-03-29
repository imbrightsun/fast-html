# [데이터베이스] DDL, DML, DCL이란?  

<div style="text-align: right"> 20240309. sat. </div>

### DDL (Data Definition Language) : 데이터 정의어
> 데이터베이스를 정의하는 언어를 말하며 데이터를 생성하거나 수정, 삭제 등 데이터의 전체 골격을 결정하는 역할의 언어

* CREATE - 데이터베이스, 테이블 등을 생성
* AFTER - 테이블을 수정
* DROP - 데이터베이스, 테이블을 삭제
* TRUNCATE - 테이블 초기화

### DML (Data Manipulation Language) : 데이터 조작어
> 정의된 데이터베이스에 입력된 레코드를 조회하거나 수정하거나 삭제하는 등의 역할을 하는 언어  
  테이블에 있는 행과 열을 조작하는 언어  
  데이터베이스 사용자가 질의어를 통하여 저장된 데이터를 실질적으로 처리하는데 사용

* SELECT - 데이터를 조회
* INSERT - 데이터 삽입
* UPDATE - 데이터를 수정
* DELETE - 데이터 삭제


### DCL (Data Control Language) : 데이터 제어어
> 데이터베이스에 접근하거나 객체에 권한을 주는 등의 역할을 하는 언어  
  데어터를 제어하는 언어  
  데이터의 보안, 무결성, 회복 등을 정의하는데 사용

* GRANT - 특정 데이터베이스 사용자에게 특정 작업에 대한 수행권한 부여를 한다.
* REVOKE - 특정 데이터베이스 사용자에게 특정 작업에 대한 권한을 박탈, 회수한다.
* COMMIT - 트랜잭션[^1]의 작업이 정상적으로 완료되었음을 관리자에게 알려준다.  
  [^1]: 트랜잭션(transaction)이란 "쪼갤 수 없는 업무 처리의 최소 단위"를 말한다. 거래내역이라고도 한다. (작업의 단위는 질의어 한문장이 아님!!)
* ROLLBACK - 트랜잭션의 작업이 비정상적으로 종료 되었을 때 원래의 상태로 복구한다.
  
<br/>

> [!NOTE] 
> DDL을 통해 데이터베이스와 테이블을 생성 및 변경, 제거를 하고  
  DML을 통해 생성된 테이블 내에 있는 데이터들(행과 열)을 입력, 변경, 수정 등을 하며  
  DCL을 통해 데이터베이스의 접속 권한 등을 수정할 수 있다!
