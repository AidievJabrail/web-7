package main

// некоторые импорты нужны для проверки
import (
	"fmt"
	"net/http" // пакет для поддержки HTTP протокола
)

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*") 
	w.Write([]byte(fmt.Sprintf("Hello, %s!", r.URL.Query().Get("name"))))
}

func main() {

	http.HandleFunc("/api/user", handler)
	err := http.ListenAndServe(":8083", nil)
	if err != nil {
		fmt.Println(err)
		return
	}
}
