// ======================= GIỎ HÀNG ======================= //
// Giỏ hàng ban đầu rỗng.
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}
// Kiểm tra đăng nhập.
let isLoggedIn = false;
// Format tiền.
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' đ';
}
// ======================= THÊM VÀO GIỎ =======================
function addToCart(name, price, image){
    // Nếu không truyền dữ liệu.
    if(!name){
        const button = event.target;
        const card = button.closest(".product-card");
        name = card.querySelector("h3").innerText;
        let priceText = card.querySelector(".price").innerText;
        price = parseInt(priceText.replace(/\D/g, ""));
        image = card.querySelector("img").src;
    }
    // Kiểm tra tồn tại.
    let product = cart.find(item => item.name === name);
    if(product){
        product.quantity++;
    }
    else{
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    // Lưu localStorage.
    saveCart();
    alert("Sản phẩm đã được thêm vào giỏ hàng");
    renderCart();
}
// ======================= HIỂN THỊ GIỎ HÀNG ======================= //
function renderCart(){
    const cartBody = document.getElementById("cart-body");
    // Xóa dữ liệu rác ban đầu.
    cartBody.innerHTML = "";
    let grandTotal = 0;
    // Nếu chưa có sản phẩm.
    if(cart.length === 0){
        cartBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center; padding:20px;">
                    Giỏ hàng đang trống
                </td>
            </tr>
        `;
        document.getElementById("grand-total").innerText = "0 đ";
        return;
    }
    // Render sản phẩm.
    cart.forEach((item, index) => {
        let total = item.price * item.quantity;
        grandTotal += total;
        cartBody.innerHTML += `
            <tr>
                <td class="product-info">
                    <img src="${item.image}" width="80">
                    <span>${item.name}</span>
                </td>
                <td class="price">
                    ${formatPrice(item.price)}
                </td>
                <td>
                    <input 
                        type="number" 
                        class="qty-input"
                        value="${item.quantity}"
                        min="1"
                        onchange="updateQuantity(${index}, this.value)"
                    >
                </td>
                <td class="item-total">
                    ${formatPrice(total)}
                </td>
                <td>
                    <button class="btn-remove" onclick="removeItem(${index})">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
    });
    document.getElementById("grand-total").innerText = formatPrice(grandTotal);
}
// ======================= CẬP NHẬT SỐ LƯỢNG ======================= //
function updateQuantity(index, qty){
    qty = parseInt(qty);
    if(qty < 1){
        qty = 1;
    }
    cart[index].quantity = qty;
    saveCart();
    renderCart();
}
// ======================= XÓA SẢN PHẨM ======================= //
function removeItem(index){
    cart.splice(index, 1);

    saveCart();

    renderCart();
}
// ======================= THANH TOÁN ======================= //
function checkout(){
    // Nếu giỏ hàng rỗng.
    if(cart.length === 0){
        alert("Giỏ hàng đang trống");
        return;
    }
    // Nếu chưa đăng nhập.
    if(!isLoggedIn){
        alert("Bạn cần đăng nhập để thanh toán");
        // Hiện form đăng nhập.
        document.getElementById("account-section").style.display = "block";
        // Cuộn xuống form.
        document.getElementById("account-section")
            .scrollIntoView({
                behavior: "smooth"
            });
        return;
    }
    // Nếu đã đăng nhập.
    alert("Thanh toán thành công!");
    // Reset giỏ hàng.
    cart = [];
    saveCart();
    renderCart();
}
// ======================= ĐĂNG NHẬP ======================= //
function handleLogin(event){
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;
    // Lấy tài khoản đã đăng ký.
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if(
        savedUser &&
        email === savedUser.email &&
        pass === savedUser.password
    ) {
        isLoggedIn = true;
        alert("Đăng nhập thành công!");
        // Ẩn form.
        document.getElementById("account-section").style.display = "none";
        // Thanh toán luôn.
        checkout();
    }
    else {
        alert("Sai email hoặc mật khẩu!");
    }
}
// ======================= ĐĂNG KÝ ======================= //
function handleRegister(event){
    event.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPass").value;
    // Lưu localStorage.
    const user = {
        name: name,
        email: email,
        password: pass
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Đăng ký tài khoản thành công!");
    // Chuyển về đăng nhập.
    switchForm("login");
}
// ======================= CHUYỂN FORM ======================= //
function switchForm(type){
    const loginBox = document.getElementById("login-box");
    const registerBox = document.getElementById("register-box");
    if(type === "register"){
        loginBox.style.display = "none";
        registerBox.style.display = "block";
        registerBox.classList.remove("hidden-form");
    }
    else {
        registerBox.style.display = "none";
        loginBox.style.display = "block";
    }
}
// ======================= LOAD ======================= //
// Khi load trang -> giỏ hàng trống.
window.onload = function(){
    cart = [];
    renderCart();
    // Ẩn form đăng ký ban đầu.
    document.getElementById("register-box").style.display = "none";
}
window.onload = function(){
    renderCart();
    document.getElementById("register-box").style.display = "none";
}