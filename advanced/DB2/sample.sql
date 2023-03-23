/* Seu desafio é consultar a remuneração máxima (todas as formas de 
pagamento de alguém) em cada departamento pelo nome do 
departamento. Exiba DEPTNAME e MAX_COMPENSATION. Mantenha 
em mente tudo o que você aprendeu sobre a sintaxe SQL, pois isso 
será necessário.Saiba todas as colunas de cada tabela. Uma boa 
prática é fazer uma lista delas. 
Quando você tiver a saída desejada, faça download dela como um 
arquivo .csv clicando no ícone de arquivo na guia de resultados. Isso 
fará o download dela em sua máquina.
Dica: há mais de uma coluna que conta como compensação! //*/

SELECT * FROM IBMUSER.EMP;

SELECT * FROM IBMUSER.DEPT;

SELECT DEPTNAME, DEPTNO FROM IBMUSER.DEPT;

SELECT FIRSTNME FROM IBMUSER.EMP WHERE JOB='MANAGER';

SELECT COUNT(*) FROM IBMUSER.EMP WHERE JOB='MANAGER';

SELECT DEPTNAME, 
    MAX(SALARY) + MAX(BONUS) + MAX(COMM) as MAX_COMPENSATION
    FROM IBMUSER.EMP E, IBMUSER.DEPT D
    WHERE D.DEPTNO = E.WORKDEPT 
    GROUP BY DEPTNAME
    ORDER BY DEPTNAME;