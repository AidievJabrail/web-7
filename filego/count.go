package main

// некоторые импорты нужны для проверки
import (
	"fmt"
	"net/http"
	"strconv"
)

var count int

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	switch r.Method {
	case http.MethodGet:
		w.Write([]byte(strconv.Itoa(count)))
	case http.MethodPost:
		data := r.FormValue("count")
		datanum, err := strconv.Atoi(data)
		if err != nil {
			w.WriteHeader(400)
			w.Write([]byte("это не число"))
			return
		}
		count += datanum
	}
}

func main() {
	http.HandleFunc("/count", handler)
	err := http.ListenAndServe(":8081", nil)
	if err != nil {
		fmt.Println(err)
		return
	}
}
