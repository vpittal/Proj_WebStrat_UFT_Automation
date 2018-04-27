' Creating Library for handling Excel Functions

'Public Variables
Public xlapp,work,osheet

' Function Name : subcreateExcel
' Input Parameters : Name of the File to be created along with complete path
' Output Parameters : None
' Task : To create the Resultant Result Sheet 
' Author : Pankaj Behl
Public function subcreateBasicExcel(strFileName)
Set AppXls = CreateObject("Excel.Application")
Set ObjWb = AppXls.Workbooks.Add
ObjWb.Worksheets(1).Name = "Fee Schedules"
ObjWb.Worksheets(2).Name = "Maintenance"
ObjWb.Worksheets.Add().Name = "Facilities"
ObjWb.Worksheets.Add().Name = "Professionals"
ObjWb.Worksheets.Add().Name = "Clients"

For i=1 to ObjWb.Worksheets.Count

set osheet1=ObjWb.Worksheets(i)

osheet1.cells(1,1)="Link"
osheet1.cells(1,2)="SubItem1"
osheet1.cells(1,3)="SubItem2"
osheet1.cells(1,4)="StepNo"
osheet1.cells(1,5)="StepDescription"
osheet1.cells(1,6)="StepExpected"
osheet1.cells(1,7)="Actual"
osheet1.cells(1,8)="Pass/Fail"
'osheet1.cells(1,9)="Err_Msg"

osheet1.Columns(1).ColumnWidth = 10
osheet1.Columns(1).WrapText = True
osheet1.Columns(2).ColumnWidth = 10
osheet1.Columns(2).WrapText = True
osheet1.Columns(3).ColumnWidth = 10
osheet1.Columns(3).WrapText = True
osheet1.Columns(4).ColumnWidth = 8
osheet1.Columns(4).WrapText = True
osheet1.Columns(5).ColumnWidth = 40
osheet1.Columns(5).WrapText = True
osheet1.Columns(6).ColumnWidth = 40
osheet1.Columns(6).WrapText = True
osheet1.Columns(7).ColumnWidth = 40
osheet1.Columns(7).WrapText = True
osheet1.Columns(8).ColumnWidth = 12
osheet1.Columns(8).WrapText = True
'osheet1.Columns(9).ColumnWidth = 40
'osheet1.Columns(9).WrapText = True
osheet1.Range("A:A,B:B,C:C,D:D,E:E,F:F,G:G,H:H,I:I").Borders(7).LineStyle = 1
osheet1.Range("A:A,B:B,C:C,D:D,E:E,F:F,G:G,H:H,I:I").Borders(8).LineStyle = 1
osheet1.Range("A:A,B:B,C:C,D:D,E:E,F:F,G:G,H:H,I:I").Borders(9).LineStyle = 1
osheet1.Range("A:A,B:B,C:C,D:D,E:E,F:F,G:G,H:H,I:I").Borders(10).LineStyle = 1
osheet1.Range("A:A,B:B,C:C,D:D,E:E,F:F,G:G,H:H,I:I").Borders(12).LineStyle = 1
osheet1.Rows(1).Interior.ColorIndex = 15
osheet1.Rows(1).Font.Bold = True

set osheet1 = nothing
Next

ObjWb.SaveAs (strFileName)

ObjWb.Close
Appxls.quit
set Objwb=nothing
set Appxls=nothing
End Function


' Function Name : subExcelStepWrite
' Input Parameters :  Workbook object,Link Name,Subitem,StepNo,StepDescription,StepExpected,StepActual,Result
' Output Parameters : None
' Task : To write a Result Step to the Resultant Result Sheet 
' Author : Pankaj Behl
Function subExcelStepWrite(byref obj,link1,subitem1,subitem2,stepNo,stepDesc,stepExp,actual,res)
sheetname=Environment.Value ("sheet")
   Set objC=obj.Worksheets(sheetname)
   strpath="C:\ppoONE\Results\" &  "ppoOneError.png"
row=objC.UsedRange.Rows.Count
row=row+1
If stepNo<> " " Then
	If objC.cells(row-1,4) <> " " and objC.cells(row-1,4) <> "StepNo" Then
	stepNo=objC.cells(row-1,4) 
	'print stepNo
	stepNo=cint(stepNo)
	stepNo=stepNo+1
End If

End If


objC.cells(row,1)=link1
objC.cells(row,2)=subitem1
objC.cells(row,3)=subitem2
objC.cells(row,4)=stepNo
objC.cells(row,5)=stepDesc
objC.cells(row,6)=stepExp
objC.cells(row,7)=actual
objC.cells(row,8)=res

If  ( res="Fail") Then
Set fso = CreateObject("Scripting.FileSystemObject")
   If (fso.FileExists(strpath)) Then
      msg = filespec & " exists."
	else
Desktop.CaptureBitmap strpath,true
end if 
   objC.Rows(row).Interior.ColorIndex = 40
 objC.Rows(row).Font.ColorIndex = 3
    objC.Rows(row).Font.Bold = True
		Set r1=objC.cells(row,8)
	set ad=r1.AddComment("")
ad.Text("")
ad.Shape.Fill.UserPicture strpath
ad.Shape.ScaleHeight 6,0
ad.Shape.ScaleWidth 4.5,0
Set r1=nothing
Set ad=nothing

fso.DeleteFile(strpath)
Set fso=nothing
End If

obj.Save

Set objC=nothing
End Function

' Function Name : subopenExcel
' Input Parameters :  None
' Output Parameters : Reference of opened Excel Workbook
' Task : To open a Excel Workbook
' Author : Pankaj Behl

Function subopenExcel(filename)
   Set xlapp=createobject("Excel.Application")
   Set work=xlapp.workbooks.open(filename)
   
  set  subopenExcel=work
End Function


' Function Name : subcloseExcel
' Input Parameters :  Reference of opened Excel Workbook
' Output Parameters : None
' Task : To Close a Excel Workbook
' Author : Pankaj Behl


Function subcloseExcel(owork)
owork.close
'xlapp.Quit
Set xlapp=nothing
Set work=nothing
End Function

