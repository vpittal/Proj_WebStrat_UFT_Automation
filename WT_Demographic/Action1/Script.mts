SystemUtil.Run "iexplore.exe", "http://apset1004/HSS/WebStrat/login.aspx"

Browser("name:=Web.Strat Login").Page("title:=Web.Strat Login").WebEdit("name:=TextBoxUserId","html tag:=INPUT","type:=text").Set "ERC_WSD"


Browser("name:=Web.Strat Login").Page("title:=Web.Strat Login").WebEdit("name:=TextBoxPassword","html tag:=INPUT","type:=password").Set "hss_PATDB"

Browser("name:=Web.Strat Login").Page("title:=Web.Strat Login").WebButton("name:=Login","html tag:=INPUT","type:=submit").Click


'Demographic screen 

Browser("name:=Web.Strat Login").Page("title:=Web.Strat Login").Frame("name:=DemographicsIFrame").WebEdit("html id:=DropDownFacilityID").Set "111"



'Browser("Web.Strat").Page("Web.Strat").Frame("DemographicsIFrame").WebEdit("DropDownFacilityID").Set "111" @@ hightlight id_;_Browser("Web.Strat").Page("Web.Strat").Frame("DemographicsIFrame").WebEdit("DropDownFacilityID")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Web.Strat").Page("Web.Strat").Frame("DemographicsIFrame").WebEdit("txtDropDownPayerID").Set "04301392" @@ hightlight id_;_Browser("Web.Strat").Page("Web.Strat").Frame("DemographicsIFrame").WebEdit("txtDropDownPayerID")_;_script infofile_;_ZIP::ssf2.xml_;_
