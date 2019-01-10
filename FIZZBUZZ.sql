set serveroutput on 
declare 
fizz boolean:= false ; 
buzz boolean:=false ; 

begin 
for i in 1..100 
 loop 
 
fizz := MOD(i, 3) = 0 ; 
Buzz:= MOD (i, 5)= 0 ; 

CASE 
  
  WHEN fizz and buzz then 
  dbms_output.put_line('FIZZBUZZ') ; 
  
   WHEN fizz then 
   dbms_output.put_line('FIZZ') ; 

  WHEN buzz then 
   dbms_output.put_line('BUZZ') ; 
  
 ELSE 
 dbms_output.put_line(i); 


  END CASE; 
  END LOOP; 
  END; 
  

