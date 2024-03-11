# 데이터 조회와 필터링

### 01. SELECT 문

``` sql
SELECT
	*
  FROM
	customer
;


SELECT
	c.first_name, 
	c.last_name,
	c.email
  FROM
	customer c 
;
```
>alias를 붙여주면,
>1) 코드의 가독성및 sql성을 높일 수 있다.
>2) DBMS에 있는 optimizer(SQL을 수행할 최적의 처리 경로를 생성해주는 핵심엔진)에도 도움을 줄 수 있다.

<br/>
<br/>

### 02. ORDER BY 문
``` sql
SELECT
	first_name,
	last_name,
	email
  FROM
	customer
ORDER BY
	first_name
;
``` 
> order by defalt: asc.  desc(내림차순)일때 null값이 있을경우 제일 먼저 나옴

<br/>
<br/>

### 03. SELECT DISTINCT 문
``` sql
SELECT
	DISTINCT first_name
	    FROM 
		 customer
	ORDER BY
		 first_name
;
```
> select 시 distinct를 사용하면 중복값을 제외한 결과값이 출력됨 (이름이 같은 사람 나오지 않게 하기)

``` sql
SELECT
   DISTINCT first_name,
		last_name
       FROM 
		customer
   ORDER BY
		first_name,
		last_name 
;
```
> 1컬럼 2컬럼 중복된 애들 제외하고 나오게 하기 (이름과 성이 같은 사람은 제외)

``` sql
SELECT
   DISTINCT ON
		(first_name) first_name,
		last_name
       FROM 
		customer
   ORDER BY
		first_name,
		last_name DESC 
;
```
> 중복된 이름값이 나오고, 성은 내림차순 순으로 한개만 보여짐.

<br/>
<br/>

### 04. WHERE 절
``` sql
SELECT
	 last_name,
	 first_name
  FROM
	 customer
 WHERE
	 first_name = 'Jamie'
   AND   last_name = 'Rice'
;
```
>이름이 Jamie이고, 성이 Rice인 사람 보여주기

``` sql
SELECT
	 customer_id ,
	 amount,
	 payment_date 
  FROM
 	 payment
 WHERE 
  	 amount <= 1
    OR   amount >= 8
;
```
> payment 테이블에서 amount값이 1이하 8이상인 데이터의 customer_id, amount, payment_date 출력

<br/>
<br/>

### 05. LIMIT 절
``` sql
SELECT
	 film_id,
	 title,
	 release_year
    FROM
	 film
ORDER BY
	 film_id
   LIMIT 5
;
```
``` sql
SELECT
	 film_id,
	 title,
	 release_year
    FROM
	 film
ORDER BY
	 film_id
   LIMIT 4
  OFFSET 3
;
```
> film_id 로 정렬한다. 정렬한 값 중 결과 건수는 4건으로 제한한다. 출력행의 시작치는 3이다. (시작위치 3은 0,1,2,3 즉 4번째 행부터 시작)

``` sql
SELECT
	film_id,
	title,
	rental_rate
   FROM
	film
ORDER BY
	rental_rate DESC
  LIMIT 10
;
```
<br/>
<br/>

### 06. FETCH 절
``` sql
SELECT
	 film_id,
	 title
  FROM
	 film
ORDER BY
	 title             -- 타이틀로 정렬한 집합 중에
FETCH FIRST ROW ONLY   -- 최초의 단 한 건의 행을 리턴한다.
;
```
``` sql
SELECT
		film_id,
		title
  FROM
		film
ORDER BY
		title            -- 타이틀로 정렬한 집합 중에
     OFFSET 5 ROWS       -- 6번째 행부터 
FETCH FIRST 5 ROW ONLY   -- 5건의 행을 리턴한다.
;
```
> limit와 동일한 기능. 주로 오라클에서 지원하는 기능임.

<br/>
<br/>

### 07. IN 연산자
``` sql
SELECT
		customer_id ,
		rental_id ,
		return_date
  FROM
		rental
 WHERE
		customer_id IN (1, 2)  -- customer_id가 1 또는 2인 행을 출력
ORDER BY
		return_date DESC       -- 그 결과를 return_data 컬럼 내림차순으로 출 
;
``````

**<return_date 가 2005년 5월 27일인 customer_id의 first_date, last_date를 출력하기!>**
1.  rental 테이블에서 return_date 가 2005년 5월 27일인 customer_id 출력

```sql
SELECT
		customer_id
  FROM
		rental
 WHERE
		CAST (return_date AS date) = '2005-05-27'      
		-- return_date 가 2005년 5월 27일인 customer_id를 출력 
;
```

2. customer 테이블에서 'IN'을 활용하여 rental 에서 출력된 customer_id의 first_date, last_date를 출력
``` sql
SELECT
		first_name,
		last_name
  FROM
		customer                         
 WHERE
		customer_id IN (
						SELECT
							customer_id
						FROM
							rental
						WHERE
							CAST (return_date AS date) = '2005-05-27'
		        		); 
```

<br/>
<br/>

### 08. BETWEEN 연산자
```sql
SELECT
	customer_id ,
	payment_id ,
	amount
FROM
	payment
WHERE
	amount BETWEEN 8 AND 9
;
----------------------------------------------------------------------------

SELECT
	customer_id ,
	payment_id ,
	amount
FROM
	payment
WHERE amount >= 8
  AND amount <= 9
;
```
> 두 SQL의 결과는 동일함.

```sql
SELECT
	customer_id ,
	payment_id ,
	amount
FROM
	payment
WHERE
	amount NOT BETWEEN 8 AND 9
;
-----------------------------------------------------------------------------

SELECT
	customer_id ,
	payment_id ,
	amount
FROM
	payment
WHERE amount < 8
   OR amount > 9
;
```
> 두 SQL의 결과는 동일함.

```sql
SELECT
	customer_id ,
	payment_id ,
	amount ,
	payment_date
FROM
	payment
WHERE
	CAST(payment_date AS date)
BETWEEN '2007-02-07' AND '2007-02-15'
;
-----------------------------------------------------------------------------

SELECT
	customer_id ,
	payment_id ,
	amount ,
	payment_date
FROM
	payment
WHERE
	to_char(payment_date,'yyyy-mm-dd')
BETWEEN '2007-02-07' AND '2007-02-15'
;
```
> 두 SQL의 결과는 동일함.
