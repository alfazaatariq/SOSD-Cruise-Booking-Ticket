<h1>Payment </h1>
        <h2>Total jumlah pembayaran :</h2>
        <h3>{detailTicket.total_harga}</h3>
        <form
          onSubmit={(e) => {
            onSubmitHandler(e);
          }}
        >
          <h2>Pilih Bank :</h2>

          <input
            type='radio'
            name='permata'
            id='permata'
            value='permata'
            onChange={(e) => setBank(e.target.value)}
            required
          />
          <label htmlFor='permata'>Permata Bank</label>

          <br />
          <input type='submit' value='Bayar' />
        </form>