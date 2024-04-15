import json
from django.core.management.base import BaseCommand
from carapp.models import Car

class Command(BaseCommand):
    help = 'Creates cars from JSON data and saves them to the database'

    def handle(self, *args, **options):
        json_data = '''
        {
  "statcars": [
    {
      "id": 1,
      "salon": true,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car1",
      "leasing": true,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    },
    {
      "id": 2,
      "salon": true,
      "name": "Bentley Mulsanne",
      "price": "162 500",
      "currency": "$",
      "year": "2017",
      "capacity": "6.5L",
      "distance": "35 500 km",
      "location": "Bakı",
      "date": "Bugün",
      "img": "car2",
      "leasing": true,
      "credit": true,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    },
    {
      "id": 3,
      "salon": true,
      "name": "Chevrolet Camaro",
      "price": "23 500",
      "currency": "$",
      "year": "2020",
      "capacity": "2.5L",
      "distance": "95 500 km",
      "location": "Bakı",
      "date": "23.03.2024",
      "img": "car3",
      "leasing": true,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    },
    {
      "id": 4,
      "salon": true,
      "name": "Mercedes-Benz G 55 AMG",
      "price": "162 500",
      "currency": "AZN",
      "year": "2020",
      "distance": "110 000 km",
      "location": "Mingəçevir",
      "date": "23.03.2024",
      "capacity": "5.2L",
      "img": "car4",
      "leasing": true,
      "credit": false,
      "barter": false,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    },
    {
      "id": 5,
      "salon": true,
      "name": "Mercedes-Benz S 500",
      "price": "75 500",
      "currency": "$",
      "year": "2021",
      "distance": "110 000 km",
      "location": "Bakı",
      "capacity": "5.5L",
      "date": "Bugün",
      "img": "car5",
      "leasing": true,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    },
    {
      "id": 6,
      "salon": true,
      "name": "Ferrari California",
      "price": "185 000",
      "currency": "$",
      "capacity": "4.0 L",
      "year": "2021",
      "distance": "35 500 km",
      "location": "Bakı",
      "date": "23.03.2024",
      "img": "car6",
      "leasing": true,
      "credit": true,
      "barter": false,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    },
    {
      "id": 7,
      "salon": true,
      "name": "Bentley Mulsanne",
      "price": "162 500",
      "currency": "$",
      "year": "2017",
      "capacity": "6.5L",
      "distance": "35 500 km",
      "location": "Bakı",
      "date": "23.03.2024",
      "img": "car7",
      "leasing": true,
      "credit": true,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    },
    {
      "id": 8,
      "salon": true,
      "name": "Chevrolet Camaro",
      "price": "23 500",
      "currency": "$",
      "year": "2020",
      "capacity": "2.5L",
      "distance": "95 500 km",
      "location": "Bakı",
      "date": "Bugün",
      "img": "car8",
      "leasing": true,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    },
    {
      "id": 9,
      "salon": true,
      "name": "Mercedes-Benz G 55 AMG",
      "price": "162 500",
      "currency": "AZN",
      "year": "2020",
      "distance": "110 000 km",
      "location": "Mingəçevir",
      "date": "23.03.2024",
      "capacity": "5.2L",
      "img": "car9",
      "leasing": true,
      "credit": false,
      "barter": false,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    },
    {
      "id": 10,
      "salon": true,
      "name": "Ferrari California",
      "price": "185 000",
      "currency": "$",
      "capacity": "4.0 L",
      "year": "2021",
      "distance": "35 500 km",
      "location": "Bakı",
      "date": "23.03.2024",
      "img": "car10",
      "leasing": true,
      "credit": true,
      "barter": false,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    },
    {
      "id": 11,
      "salon": true,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "23.03.2024",
      "img": "car5",
      "leasing": true,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    },
    {
      "id": 12,
      "salon": true,
      "name": "Mercedes-Benz S 500",
      "price": "75 500",
      "currency": "$",
      "year": "2021",
      "distance": "110 000 km",
      "location": "Bakı",
      "capacity": "5.5L",
      "date": "23.03.2024",
      "img": "car9",
      "leasing": true,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "supplies": [
        { "key": "TV", "case": true },
        { "key": "USB Ports", "case": true },
        { "key": "Elektrik pəncərələr", "case": true },
        { "key": "Kondisioner", "case": true },
        { "key": "Bluetooth", "case": true },
        { "key": "Toxunma ekran", "case": true },
        { "key": "WI-FI", "case": true },
        { "key": "Siqnalizasiya sistemi", "case": true },
        { "key": "Təcili zəng sistemi", "case": true },
        { "key": "Oturacaqların isidilməsi", "case": true },
        { "key": "Dəri sükan", "case": true },
        { "key": "Naviqasiya sistemi", "case": true },
        { "key": "Oturacaqların havalandırılması", "case": true }
      ],
      "otherAdvantages": [
        { "key": "ABS", "case": true },
        { "key": "Lyuk", "case": true },
        { "key": "Ksenon lampalar", "case": true },
        { "key": "Məsafə xəbərdarlıq sistemi", "case": true },
        { "key": "Adaptiv dönmə işıqları", "case": true },
        { "key": "Yüngül lehimli disklər", "case": true },
        { "key": "Ehtiyat təkərlər", "case": true },
        { "key": "Qızdırılan ön şüşə", "case": true },
        { "key": "Start-stop sistemi", "case": true },
        { "key": "Yağış sensoru", "case": true },
        { "key": "Duman əleyhinə lampa", "case": true },
        { "key": "Mərkəzi qapanma", "case": true }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır.",
        "hasCrash": false,
        "isPainted": false
      }
    }
  ],
  "companies": [
    {
      "id": 1,
      "companyName": "Autostyle",
      "img": "company1.png",
      "phone": "+994505556412"
    },
    {
      "id": 2,
      "companyName": "West Coast",
      "img": "company2.png",
      "phone": "+994505556412"
    },
    {
      "id": 3,
      "companyName": "Car Fanatics",
      "img": "company4.png",
      "phone": "+994505556412"
    },
    {
      "id": 4,
      "companyName": "Company",
      "img": "company3.png",
      "phone": "+994505556412"
    },
    {
      "id": 5,
      "companyName": "Car Fanatics",
      "img": "company4.png",
      "phone": "+994505556412"
    },
    {
      "id": 6,
      "companyName": "Company",
      "img": "company3.png",
      "phone": "+994505556412"
    },
    {
      "id": 7,
      "companyName": "Autostyle",
      "img": "company1.png",
      "phone": "+994505556412"
    },
    {
      "id": 8,
      "companyName": "West Coast",
      "img": "company2.png",
      "phone": "+994505556412"
    },
    {
      "id": 9,
      "companyName": "Autostyle",
      "img": "company1.png",
      "phone": "+994505556412"
    },
    {
      "id": 10,
      "companyName": "West Coast",
      "img": "company2.png",
      "phone": "+994505556412"
    },
    {
      "id": 11,
      "companyName": "Car Fanatics",
      "img": "company4.png",
      "phone": "+994505556412"
    },
    {
      "id": 12,
      "companyName": "Company",
      "img": "company3.png",
      "phone": "+994505556412"
    },
    {
      "id": 13,
      "companyName": "Car Fanatics",
      "img": "company4.png",
      "phone": "+994505556412"
    },
    {
      "id": 14,
      "companyName": "Company",
      "img": "company3.png",
      "phone": "+994505556412"
    },
    {
      "id": 15,
      "companyName": "Autostyle",
      "img": "company1.png",
      "phone": "+994505556412"
    },
    {
      "id": 16,
      "companyName": "West Coast",
      "img": "company2.png",
      "phone": "+994505556412"
    }
  ],
  "newCars": [
    {
      "id": 1,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car1",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 2,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car2",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 3,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car3",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 4,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car4",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 5,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car5",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 6,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car6",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 7,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car7",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 8,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car8",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 9,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car9",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 10,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car10",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 11,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car9",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 12,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car9",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 13,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car1",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 14,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car3",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 15,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car8",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 16,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car5",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 17,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car10",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 18,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car4",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 19,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car2",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    },
    {
      "id": 20,
      "salon": false,
      "name": "Audi A4",
      "price": "21 000",
      "currency": "$",
      "capacity": "2.5L",
      "year": "2018",
      "distance": "180 800 km",
      "location": "Sumqayıt",
      "date": "Bugün",
      "img": "car7",
      "leasing": false,
      "credit": false,
      "barter": true,
      "extraInfo": [
        {
          "title": "Mühərrik həcmi",
          "value": "5.5 L",
          "imgName": "engine_volume"
        },
        { "title": "Il", "value": "2021", "imgName": "year" },
        { "title": "Rəng", "value": "Qara", "imgName": "color" },
        { "title": "Yürüyüş", "value": "110 000 km", "imgName": "distance" },
        { "title": "Ban növü", "value": "Sedan", "imgName": "bantype" },
        { "title": "Sahib", "value": "2", "imgName": "owner" },
        {
          "title": "Transmissiya",
          "value": "Avtomat",
          "imgName": "transmission"
        },
        { "title": "Güc", "value": "263", "imgName": "power" },
        { "title": "Oturacaq sayı", "value": "5", "imgName": "number_seats" },
        { "title": "Ötürücü", "value": "Ön", "imgName": "gear" },
        { "title": "Yanacaq", "value": "Dizel", "imgName": "fuel" },
        { "title": "Şəhər", "value": "Bakı", "imgName": "city" }
      ],
      "basicInfo": [
        { "key": "Vəziyyəti", "value": "Sürülmüş" },
        { "key": "Yanacaq sərfiyyatı", "value": "71/100 km" },
        { "key": "Parkinq sensoru", "value": "360° kamera" },
        {
          "key": "Sürət kontrol düzənləyici",
          "value": "Adaptiv kontrol düzənləyici"
        },
        { "key": "Daxili rəngi", "value": "Bej" },
        { "key": "Daxili materialı", "value": "Tam dəri" },
        { "key": "Hava yastıqları", "value": "Ön təhlükəsizlik yastıqları" }
      ],
      "note": {
        "content": "Heç bir detalında vuruğu yoxdur. Rənglənən yeri yoxdur. Mercedes Servisindən alınıb. Çox baxımlı, səliqəli maşındır."
      }
    }
  ]
}
        '''

        cars_data = json.loads(json_data)['statcars']

        for car_data in cars_data:
            car = Car.objects.create(
                id=car_data['id'],
                salon=car_data['salon'],
                name=car_data['name'],
                price=car_data['price'],
                currency=car_data['currency'],
                capacity=car_data['capacity'],
                year=car_data['year'],
                distance=car_data['distance'],
                location=car_data['location'],
                date=car_data['date'],
                img=car_data['img'],
                leasing=car_data['leasing'],
                credit=car_data['credit'],
                barter=car_data['barter'],
            )
            self.stdout.write(self.style.SUCCESS(f"Successfully created car '{car.name}' (ID: {car.id})"))
