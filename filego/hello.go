package main

// некоторые импорты нужны для проверки
import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write([]byte("Hello, web!"))
}

func main() {
	http.HandleFunc("/get", handler)
	http.ListenAndServe(":8082", nil)
	fmt.Println("Открыт порт")
}