package com.revature.SpringBootDemo.services;

import com.revature.SpringBootDemo.models.Shop;

import java.util.List;

public interface ShopService {

    //creates a new shop
    boolean createShop(Shop shop);

    //get shop by id
    Shop getShopById(int id);

    //get all shops
    List<Shop> getAllShops();

    //updates a shop
    boolean updateShop(Shop shop);

    //deletes a shop
    boolean deleteShop(Shop shop);

}
