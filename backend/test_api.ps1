$baseUrl = "http://localhost:5000/api"

Write-Host "`n--- 1. Testing Auth Register ---"
$registerBody = @{
    username = "testuser"
    email = "test@test.com"
    password = "password123"
} | ConvertTo-Json
$registerRes = Invoke-RestMethod -Uri "$baseUrl/auth/register" -Method Post -ContentType "application/json" -Body $registerBody
$registerRes | Format-List

Write-Host "`n--- 2. Testing Auth Login ---"
$loginBody = @{
    email = "test@test.com"
    password = "password123"
} | ConvertTo-Json
$loginRes = Invoke-RestMethod -Uri "$baseUrl/auth/login" -Method Post -ContentType "application/json" -Body $loginBody
$loginRes | Format-List

Write-Host "`n--- 3. Testing Create Restaurant ---"
$restBody = @{
    name = "Spicy Kitchen"
    description = "Best spicy food in town"
    address = "456 Spice Avenue"
    cuisine = "Indian"
    rating = 5
} | ConvertTo-Json
$createRes = Invoke-RestMethod -Uri "$baseUrl/restaurants" -Method Post -ContentType "application/json" -Body $restBody
$createRes | Format-List

$restId = $createRes._id

Write-Host "`n--- 4. Testing List Restaurants ---"
$listRes = Invoke-RestMethod -Uri "$baseUrl/restaurants" -Method Get
$listRes | Format-List

Write-Host "`n--- 5. Testing Get Restaurant Details ---"
$detailRes = Invoke-RestMethod -Uri "$baseUrl/restaurants/$restId" -Method Get
$detailRes | Format-List

Write-Host "`n--- 6. Testing Search API ---"
$searchRes = Invoke-RestMethod -Uri "$baseUrl/restaurants?search=Indian" -Method Get
$searchRes | Format-List
