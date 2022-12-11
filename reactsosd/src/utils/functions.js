export const getAllTicket = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/ticket/getall', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addNewTicket = async (
  asal,
  tujuan,
  tanggal,
  waktu_berangkat,
  waktu_tiba,
  harga
) => {
  try {
    const payLoad = {
      asal: asal,
      tujuan: tujuan,
      tanggal: tanggal,
      waktu_berangkat: waktu_berangkat,
      waktu_tiba: waktu_tiba,
      harga: harga,
    };
    const response = await fetch('http://localhost:5000/api/ticket/store', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    });
    const dataJSON = await response.json();
    return dataJSON;
  } catch (error) {
    console.log(error);
  }
};

export const updateTicketById = async (
  ticketID,
  asal,
  tujuan,
  tanggal,
  waktu_berangkat,
  waktu_tiba,
  harga
) => {
  try {
    const payLoad = {
      ticketID: ticketID,
      asal: asal,
      tujuan: tujuan,
      tanggal: tanggal,
      waktu_berangkat: waktu_berangkat,
      waktu_tiba: waktu_tiba,
      harga: harga,
    };
    const response = await fetch('http://localhost:5000/api/ticket/update', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    });
    const dataJSON = await response.json();
    return dataJSON;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTicketById = async (ticketID) => {
  try {
    const payLoad = {
      ticketID: ticketID,
    };
    const response = await fetch('http://localhost:5000/api/ticket/delete', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    });
    const dataJSON = await response.json();
    return dataJSON;
  } catch (error) {
    console.log(error);
  }
};

export const getTicketById = async (ticketID) => {
  try {
    const payLoad = {
      ticketID: ticketID,
    };
    const response = await fetch('http://localhost:5000/api/ticket/show', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    });
    const dataJSON = await response.json();
    return dataJSON.response;
  } catch (error) {
    console.log(error);
  }
};

export const getTicketsByForm = async (asal, tujuan, tanggal) => {
  try {
    const payLoad = {
      asal: asal,
      tujuan: tujuan,
      tanggal: tanggal,
    };
    const response = await fetch(
      'http://localhost:5000/api/ticket/searchtickets',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2FtYW4gQnJlbWJvIiwiaWF0IjoxNjY5ODgyNDgyLCJleHAiOjE2Njk4ODk2ODJ9.ZKC9bvoxBjy2UREbTsp4vscjgsdM6sh9QE6Gv-ozgc8`, // notice the Bearer before your token
        },
        body: JSON.stringify(payLoad),
      }
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTujuan = async (asal) => {
  try {
    const payLoad = {
      asal: asal,
    };
    const response = await fetch(
      'http://localhost:5000/api/ticket/searchtujuan',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2FtYW4gQnJlbWJvIiwiaWF0IjoxNjY5ODgyNDgyLCJleHAiOjE2Njk4ODk2ODJ9.ZKC9bvoxBjy2UREbTsp4vscjgsdM6sh9QE6Gv-ozgc8`, // notice the Bearer before your token
        },
        body: JSON.stringify(payLoad),
      }
    );
    const { data } = await response.json();
    const tujuan = data.map((item) => {
      return item.tujuan;
    });
    return [...new Set(tujuan)];
  } catch (error) {
    console.log(error);
  }
};

export const getAsal = async () => {
  try {
    const response = await fetch(
      'http://localhost:5000/api/ticket/searchasal',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    const { data } = await response.json();
    const asal = data.map((item) => {
      return item.asal;
    });
    return [...new Set(asal)];
  } catch (error) {
    console.log(error);
  }
};

export const orderTicket = async (bank, id, total, nama) => {
  try {
    let random = +new Date();
    const payLoad = {
      payment_type: 'bank_transfer',
      bank_transfer: {
        bank: bank,
      },
      transaction_details: {
        order_id: `kapal-${random}`,
        gross_amount: total,
      },
      tiket_id: id,
      nama: nama,
    };
    const response = await fetch('http://localhost:5000/api/order/charge', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderStatus = async (order_id) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/order/status/${order_id}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const payLoad = {
      username: email,
      password: password,
    };
    const response = await fetch(
      `http://localhost:5000/api/customer/customer-login`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payLoad),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (name, email, phone, password) => {
  try {
    const payLoad = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };
    const response = await fetch(
      `http://localhost:5000/api/customer/customer-register`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payLoad),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// UNTUK DI InvoiceList.js
export const getInvoiceByUserId = async (user_id) => {
  try {
    const payLoad = {
      user_id: user_id,
    };
    const response = await fetch(
      'http://localhost:5000/api/invoice/show_by_userid',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payLoad),
      }
    );
    const dataJSON = await response.json();
    return dataJSON.response;
  } catch (error) {
    console.log(error);
  }
};

// UNTUK DI InvoiceDetailPage.js
export const getInvoiceByOrderId = async (order_id) => {
  try {
    const payLoad = {
      order_id: order_id,
    };
    const response = await fetch(
      'http://localhost:5000/api/invoice/show_by_orderid',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payLoad),
      }
    );
    const dataJSON = await response.json();
    return dataJSON.response;
  } catch (error) {
    console.log(error);
  }
};

export const loginAdmin = async (email, password) => {
  try {
    const payLoad = {
      username: email,
      password: password,
    };
    const response = await fetch(`http://localhost:5000/api/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerAdmin = async (name, email, phone, password) => {
  try {
    const payLoad = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };
    const response = await fetch(`http://localhost:5000/api/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllInvoice = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/invoice/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteInvoiceById = async (invoiceID) => {
  try {
    const payLoad = {
      invoiceID: invoiceID,
    };
    const response = await fetch('http://localhost:5000/api/invoice/delete', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    });
    const dataJSON = await response.json();
    return dataJSON;
  } catch (error) {
    console.log(error);
  }
};

// BUAT USER
export const userAddInvoice = async (invoice) => {
  try {
    const payLoad = {
      user_id: invoice.user_id,
      asal: invoice.asal,
      tujuan: invoice.tujuan,
      tanggal: invoice.tanggal,
      waktu_berangkat: invoice.waktu_berangkat,
      waktu_tiba: invoice.waktu_tiba,
      harga: invoice.harga,
      nama: invoice.nama,
      no: invoice.no,
      alamat: invoice.alamat,
      jumlah_tiket: invoice.jumlah_tiket,
      total_harga: invoice.total_harga,
      order_id: invoice.order_id,
    };
    const response = await fetch('http://localhost:5000/api/invoice/store', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// BUAT ADMIN
export const adminAddInvoice = async (
  userId,
  asal,
  tujuan,
  tanggal,
  waktuBerangkat,
  waktuTiba,
  harga,
  nama,
  no,
  alamat,
  jumlahTiket,
  totalHarga,
  orderId
) => {
  try {
    const payLoad = {
      user_id: userId,
      asal: asal,
      tujuan: tujuan,
      tanggal: tanggal,
      waktu_berangkat: waktuBerangkat,
      waktu_tiba: waktuTiba,
      harga: harga,
      nama: nama,
      no: no,
      alamat: alamat,
      jumlah_tiket: jumlahTiket,
      total_harga: totalHarga,
      order_id: orderId,
    };
    const response = await fetch('http://localhost:5000/api/invoice/store', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateInvoiceById = async (
  invoiceID,
  userID,
  asal,
  tujuan,
  tanggal,
  waktu_berangkat,
  waktu_tiba,
  harga,
  nama,
  no,
  alamat,
  jumlah_tiket,
  total_harga,
  order_id
) => {
  try {
    const payLoad = {
      invoiceID: invoiceID,
      user_id: userID,
      asal: asal,
      tujuan: tujuan,
      tanggal: tanggal,
      waktu_berangkat: waktu_berangkat,
      waktu_tiba: waktu_tiba,
      harga: harga,
      nama: nama,
      no: no,
      alamat: alamat,
      jumlah_tiket: jumlah_tiket,
      total_harga: total_harga,
      order_id: order_id,
    };
    const response = await fetch('http://localhost:5000/api/invoice/update', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    });
    const dataJSON = await response.json();
    return dataJSON;
  } catch (error) {
    console.log(error);
  }
};
