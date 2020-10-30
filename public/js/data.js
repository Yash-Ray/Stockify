data1=[
    {
        Country:"JAPAN",
        Ex_value:"19.6B",
        Share_glo:16.8,
        T_perf:"Glaxo",
        M_value_cr:"375.4",
    },
    {
        Country:"GERMANY",
        Ex_value:"8.6B",
        Share_glo:7,
        T_perf:"Pfizer",
        M_value_cr:"345.9"
    },{
        Country:"INDIA",
        Ex_value:"3.6B",
        Share_glo:5.9,
        T_perf:"Dr.Reddy",
        M_value_cr:"2.4"
    },{
        Country:"FRANCE",
        Ex_value:"7.9B",
        Share_glo:5.3,
        T_perf:"Sanfoi",
        M_value_cr:"365.6"
    },{
        Country:"BRAZIL",
        Ex_value:"1.6B",
        Share_glo:1.8,
        T_perf:"marini",
        M_value_cr:"5.4"
    },{
        Country:"USA",
        Ex_value:"9.6B",
        Share_glo:6.8,
        T_perf:"Bx Pharma",
        M_value_cr:"75.9"
    }
    
]
data1.forEach(function(items){
    $(".t1").append("<tr> <td>"+items.Country+"</td><td>"+items.Ex_value+"</td><td>"+items.Share_glo+"</td><td>"+items.T_perf+"</td><td>"+items.M_value_cr+"</td></tr>")
})

data2=[
    {
        Country:"CHINA",
        GDP:"13T",
        Inf_rate:2.5,
        Per_cap_inc:9856,
        GDP_Gr_rate:6.9
    },
    {
        Country:"JAPAN",
        GDP:"4.8T",
        Inf_rate:0.1,
        Per_cap_inc:44582,
        GDP_Gr_rate:1.71
    },
    {
        Country:"GERMANY",
        GDP:"3.6T",
        Inf_rate:-0.1,
        Per_cap_inc:38952,
        GDP_Gr_rate:2.22,
    },
    {
        Country:"INDIA",
        GDP:"2.7T",
        Inf_rate:6.09,
        Per_cap_inc:1980,
        GDP_Gr_rate:6.68
    },
    {
        Country:"France",
        GDP:"2.5T",
        Inf_rate:0.8,
        Per_cap_inc:37985,
        GDP_Gr_rate:1.82
    }
]

data2.forEach(function(items){
    $(".t2").append("<tr> <td>"+items.Country+"</td><td>"+items.GDP+"</td><td>"+items.Inf_rate+"</td><td>"+items.Per_cap_inc+"</td><td>"+items.GDP_Gr_rate+"</td></tr>")
})

data3 =[
    {
        Company:"BAJAJ",
        Buy_price:25.05,
        Volume:300
    },
    {
        Company:"TATA",
        Buy_price:30.05,
        Volume:55.05
    },
    {
        Company:"REL",
        Buy_price:55.05,
        Volume:305
    },
    {
        Company:"PVK PHARMA",
        Buy_price:26.05,
        Volume:300
    },
    {
        Company:"MDN",
        Buy_price:10.05,
        Volume:230
    },
    {
        Company:"SANFOI",
        Buy_price:10.05,
        Volume:220
    }
]

data3.forEach(function(items){
    $(".t3").append("<tr> <td>"+items.Company+"</td><td>"+items.Buy_price+"</td><td>"+items.Volume+"</td></tr>")
})

data4 = [
    {
        Company:"BAJAJ",
        Origin:"INDIA",
        Stock_Value:"8.00 l Cr",
        Gro_per:7,
    },
    {
        Company:"TATA",
        Origin:"IINDIA",
        Stock_Value:"12.00 l Cr",
        Gro_per:7,
    },
    {
        Company:"REL",
        Origin:"INDIA",
        Stock_Value:"7.00 l Cr",
        Gro_per:9,
    },
    {
        Company:"PVK PHARMA",
        Origin:"INDIA",
        Stock_Value:"2.00 l Cr",
        Gro_per:2,
    },
    {
        Company:"MDN",
        Origin:"INDIA",
        Stock_Value:"1.40 l Cr",
        Gro_per:8.5,
    },
    {
        Company:"SANFOI",
        Origin:"FRANCE",
        Stock_Value:"5.4 l Cr",
        Gro_per:6,
    },
    {
        Company:"MARINI",
        Origin:"BRAZIL",
        Stock_Value:"5.50 l Cr",
        Gro_per:4.4,
    }
]

data4.forEach(function(items){
    $(".t4").append("<tr><td>"+items.Company+"</td><td>"+items.Origin+"</td><td>"+items.Stock_Value+"</td><td>"+items.Gro_per+"</td></tr>")
})
