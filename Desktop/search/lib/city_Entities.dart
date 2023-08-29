// ignore_for_file: prefer_const_constructors

import 'package:cloud_firestore/cloud_firestore.dart';
//import 'package:com.Syge.JoaSE/colors.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:url_launcher/url_launcher.dart';
//import 'package:com.Syge.JoaSE/colors.dart';
//import 'package:com.Syge.JoaSE/models/main1.dart';
//import 'package:com.Syge.JoaSE/models/user.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';

import 'dart:js' as js;

import 'firebase_options.dart';

class City_entities extends StatefulWidget {
  const City_entities({Key? key}) : super(key: key);

  @override
  State<City_entities> createState() => _City_entitiesState();
}

class _City_entitiesState extends State<City_entities> {
  String Query = "";

  @override
  Widget build(BuildContext context) {
    double size = MediaQuery.of(context).size.width;
    double text_size;
    var condition = true;
    if (size < 768) {
      condition = false;
    }
    if (size < 768) {
      text_size = 15;
    } else {
      text_size = 20;
    }
    return Scaffold(
        appBar: AppBar(
            leading: IconButton(
              icon: Icon(Icons.arrow_back, color: Colors.black),
              onPressed: () => Navigator.of(context).pop(),
            ),
            backgroundColor: Colors.white,
            title: Container(
              child: TextField(
                onChanged: (val) {
                  setState(() {
                    Query = val;
                  });
                },
                decoration: InputDecoration(
                    filled: true,
                    fillColor: Color.fromARGB(255, 204, 204, 204),
                    contentPadding: EdgeInsets.all(0),
                    prefixIcon: Icon(
                      Icons.search,
                      color: Colors.grey.shade500,
                    ),
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(50),
                        borderSide: BorderSide.none),
                    hintStyle: TextStyle(
                        fontSize: text_size - 4, color: Colors.grey.shade500),
                    hintText: "Search"),
              ),
            )),
        body: StreamBuilder<QuerySnapshot>(
          stream: FirebaseFirestore.instance
              .collection('CITY_ENTITIES2')
              .snapshots(),
          builder: (context, snapshots) {
            return (snapshots.connectionState == ConnectionState.waiting)
                ? Center(
                    child: CircularProgressIndicator(),
                  )
                : ListView.builder(
                    itemCount: snapshots.data!.docs.length,
                    itemBuilder: (context, index) {
                      var data = snapshots.data!.docs[index].data()
                          as Map<String, dynamic>;

                      if (Query.isEmpty) {
                        return ListTile(
                          title: Column(
                            children: [
                              Container(
                                margin: EdgeInsets.symmetric(
                                    horizontal: 10, vertical: 7),
                                padding: EdgeInsets.only(top: 10, bottom: 10),
                                decoration: new BoxDecoration(
                                  borderRadius: BorderRadius.only(
                                    topRight: Radius.circular(25),
                                    bottomLeft: Radius.circular(25),
                                    topLeft: Radius.circular(25),
                                    bottomRight: Radius.circular(25),
                                  ),
                                  // color: color4,
                                  // shape: BoxShape.circle,
                                  border: Border.all(
                                    color:
                                        color4, //                   <--- border color
                                    width: 3.0,
                                  ),
                                ),
                                child: Row(
                                  children: [
                                    Row(
                                      children: [
                                        Container(
                                          margin: EdgeInsets.symmetric(
                                            horizontal: 10,
                                          ),
                                          child: CircleAvatar(
                                            backgroundImage: NetworkImage(
                                                data['image'].toString()),
                                          ),
                                        ),
                                        Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            Container(
                                              //  margin: new EdgeInsets.symmetric(vertical: 20.0),
                                              decoration: BoxDecoration(
                                                color: color4,
                                                borderRadius:
                                                    BorderRadius.circular(10),
                                              ),
                                              width: MediaQuery.of(context)
                                                      .size
                                                      .width *
                                                  0.65,
                                              child: Padding(
                                                  padding: EdgeInsets.all(10),
                                                  child: SelectableText.rich(
                                                    TextSpan(children: [
                                                      TextSpan(
                                                        text: data["Job_name"]
                                                            .toString(),
                                                        style: TextStyle(
                                                            color: Colors.black,
                                                            fontWeight:
                                                                FontWeight.w500,
                                                            fontSize:
                                                                text_size - 4),
                                                      ),
                                                    ]),
                                                  )),
                                            ),
                                            Container(
                                              width: 200,
                                              child: Center(
                                                child: Column(
                                                  children: [
                                                    RichText(
                                                      text: TextSpan(
                                                        children: [
                                                          WidgetSpan(
                                                            child: Icon(
                                                              Icons
                                                                  .location_pin,
                                                              size: 14,
                                                              color:
                                                                  Colors.blue,
                                                            ),
                                                          ),
                                                          TextSpan(
                                                              text: data[
                                                                      "location"]
                                                                  .toString(),
                                                              style: TextStyle(
                                                                  color: Colors
                                                                      .black,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .w500,
                                                                  fontSize:
                                                                      text_size -
                                                                          4)),
                                                          TextSpan(text: "  "),
                                                          WidgetSpan(
                                                            child: Image.asset(
                                                              'bag.png',
                                                              height:
                                                                  text_size - 2,
                                                              width: 20,
                                                            ),
                                                          ),
                                                          TextSpan(text: " "),
                                                          TextSpan(
                                                              text: data[
                                                                      "Contract_type"]
                                                                  .toString(),
                                                              style: TextStyle(
                                                                  color: Colors
                                                                      .black,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .normal,
                                                                  fontSize:
                                                                      text_size -
                                                                          4)),
                                                          TextSpan(text: "  "),
                                                        ],
                                                      ),
                                                    ),
                                                    SizedBox(
                                                      height: 5,
                                                    ),
                                                    RichText(
                                                      text: TextSpan(
                                                        children: [
                                                          TextSpan(
                                                              text: 'Published',
                                                              style: TextStyle(
                                                                  color: Colors
                                                                      .black,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .normal,
                                                                  fontSize:
                                                                      text_size -
                                                                          4)),
                                                          TextSpan(
                                                              text: '    ',
                                                              style: TextStyle(
                                                                  color: Colors
                                                                      .black,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .normal,
                                                                  fontSize:
                                                                      text_size -
                                                                          4)),
                                                          TextSpan(
                                                              text: data[
                                                                      'Published']
                                                                  .toString(),
                                                              style: TextStyle(
                                                                  color: color2,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .w500,
                                                                  fontSize:
                                                                      text_size -
                                                                          4)),
                                                        ],
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              ),
                                            ),
                                            SizedBox(
                                              height: 5,
                                            ),
                                            Column(
                                              children: [
                                                Container(
                                                  width: MediaQuery.of(context)
                                                          .size
                                                          .width *
                                                      0.60,
                                                  decoration: BoxDecoration(
                                                    color: color5,
                                                    borderRadius:
                                                        BorderRadius.circular(
                                                            10),
                                                  ),
                                                  //  height: 40,
                                                  child: Padding(
                                                    padding: EdgeInsets.all(5),
                                                    child: Text(
                                                        data['Company_name']
                                                            .toString(),
                                                        style: TextStyle(
                                                            color: Colors.black,
                                                            fontSize:
                                                                text_size - 4)),
                                                  ),
                                                ),
                                                SizedBox(
                                                  height: 5,
                                                ),
                                                GestureDetector(
                                                  onTap: () {
                                                    setState(() {});
                                                  },
                                                  child: AnimatedContainer(
                                                      height: 35,
                                                      width:
                                                          MediaQuery.of(context)
                                                                  .size
                                                                  .width *
                                                              0.25,
                                                      duration: Duration(
                                                          milliseconds: 300),
                                                      decoration: BoxDecoration(
                                                          color: color2,
                                                          borderRadius:
                                                              BorderRadius
                                                                  .circular(5),
                                                          border: Border.all(
                                                              color: Colors
                                                                  .black)),
                                                      child: InkWell(
                                                        onTap: () {
                                                          js.context.callMethod(
                                                              'open', [
                                                            data["mylinck"]
                                                                .toString()
                                                          ]);
                                                        },
                                                        child: Center(
                                                            child: RichText(
                                                          text: TextSpan(
                                                            children: [
                                                              TextSpan(
                                                                  text:
                                                                      "Click here to Apply ",
                                                                  style: TextStyle(
                                                                      color: Colors
                                                                          .white,
                                                                      fontWeight:
                                                                          FontWeight
                                                                              .normal,
                                                                      fontSize:
                                                                          text_size -
                                                                              4)),
                                                              WidgetSpan(
                                                                child: Icon(
                                                                  Icons
                                                                      .check_box,
                                                                  size: 14,
                                                                  color: color5,
                                                                ),
                                                              ),
                                                              TextSpan(
                                                                text: "",
                                                              ),
                                                            ],
                                                          ),
                                                        )),
                                                      )),
                                                )
                                              ],
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        );
                      }
                      if (data['location']
                              .toString()
                              .toLowerCase()
                              .contains(Query.toLowerCase()) ||
                          data["Job_name"]
                              .toString()
                              .toLowerCase()
                              .contains(Query.toLowerCase()) ||
                          data["Company_name"]
                              .toString()
                              .toLowerCase()
                              .contains(Query.toLowerCase())) {
                        return ListTile(
                          title: Column(
                            children: [
                              Container(
                                margin: EdgeInsets.symmetric(
                                    horizontal: 10, vertical: 7),
                                padding: EdgeInsets.only(top: 10, bottom: 10),
                                decoration: new BoxDecoration(
                                  borderRadius: BorderRadius.only(
                                    topRight: Radius.circular(25),
                                    bottomLeft: Radius.circular(25),
                                    topLeft: Radius.circular(25),
                                    bottomRight: Radius.circular(25),
                                  ),
                                  // color: color4,
                                  // shape: BoxShape.circle,
                                  border: Border.all(
                                    color:
                                        color4, //                   <--- border color
                                    width: 3.0,
                                  ),
                                ),
                                child: Row(
                                  children: [
                                    Row(
                                      children: [
                                        Container(
                                          margin: EdgeInsets.symmetric(
                                            horizontal: 10,
                                          ),
                                          child: CircleAvatar(
                                            backgroundImage: NetworkImage(
                                                data['image'].toString()),
                                          ),
                                        ),
                                        Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            Container(
                                              //  margin: new EdgeInsets.symmetric(vertical: 20.0),
                                              decoration: BoxDecoration(
                                                color: color4,
                                                borderRadius:
                                                    BorderRadius.circular(10),
                                              ),
                                              width: MediaQuery.of(context)
                                                      .size
                                                      .width *
                                                  0.65,
                                              child: Padding(
                                                  padding: EdgeInsets.all(10),
                                                  child: SelectableText.rich(
                                                    TextSpan(children: [
                                                      TextSpan(
                                                        text: data["Job_name"]
                                                            .toString(),
                                                        style: TextStyle(
                                                            color: Colors.black,
                                                            fontWeight:
                                                                FontWeight.w500,
                                                            fontSize:
                                                                text_size - 4),
                                                      ),
                                                    ]),
                                                  )),
                                            ),
                                            Container(
                                              width: 200,
                                              child: Center(
                                                child: Column(
                                                  children: [
                                                    RichText(
                                                      text: TextSpan(
                                                        children: [
                                                          WidgetSpan(
                                                            child: Icon(
                                                              Icons
                                                                  .location_pin,
                                                              size: 14,
                                                              color:
                                                                  Colors.blue,
                                                            ),
                                                          ),
                                                          TextSpan(
                                                              text: data[
                                                                  "location"],
                                                              style: TextStyle(
                                                                  color: Colors
                                                                      .black,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .w500,
                                                                  fontSize:
                                                                      text_size -
                                                                          4)),
                                                          TextSpan(text: "  "),
                                                          WidgetSpan(
                                                            child: Image.asset(
                                                              'bag.png',
                                                              height:
                                                                  text_size - 2,
                                                              width: 20,
                                                            ),
                                                          ),
                                                          TextSpan(text: " "),
                                                          TextSpan(
                                                              text: data[
                                                                      "Contract_type"]
                                                                  .toString(),
                                                              style: TextStyle(
                                                                  color: Colors
                                                                      .black,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .normal,
                                                                  fontSize:
                                                                      text_size -
                                                                          4)),
                                                          TextSpan(text: "  "),
                                                        ],
                                                      ),
                                                    ),
                                                    SizedBox(
                                                      height: 5,
                                                    ),
                                                    RichText(
                                                      text: TextSpan(
                                                        children: [
                                                          TextSpan(
                                                              text: 'Published',
                                                              style: TextStyle(
                                                                  color: Colors
                                                                      .black,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .normal,
                                                                  fontSize:
                                                                      text_size -
                                                                          4)),
                                                          TextSpan(
                                                              text: data[
                                                                      'Published']
                                                                  .toString(),
                                                              style: TextStyle(
                                                                  color: color2,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .w500,
                                                                  fontSize:
                                                                      text_size -
                                                                          4)),
                                                        ],
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              ),
                                            ),
                                            SizedBox(
                                              height: 5,
                                            ),
                                            Column(
                                              children: [
                                                Container(
                                                  width: MediaQuery.of(context)
                                                          .size
                                                          .width *
                                                      0.60,
                                                  decoration: BoxDecoration(
                                                    color: color5,
                                                    borderRadius:
                                                        BorderRadius.circular(
                                                            10),
                                                  ),
                                                  //  height: 40,
                                                  child: Padding(
                                                    padding: EdgeInsets.all(5),
                                                    child: Text(
                                                        data['Company_name']
                                                            .toString(),
                                                        style: TextStyle(
                                                            color: Colors.black,
                                                            fontSize:
                                                                text_size - 4)),
                                                  ),
                                                ),
                                                SizedBox(
                                                  height: 5,
                                                ),
                                                GestureDetector(
                                                  onTap: () {
                                                    setState(() {});
                                                  },
                                                  child: AnimatedContainer(
                                                      height: 35,
                                                      width:
                                                          MediaQuery.of(context)
                                                                  .size
                                                                  .width *
                                                              0.25,
                                                      duration: Duration(
                                                          milliseconds: 300),
                                                      decoration: BoxDecoration(
                                                          color: color2,
                                                          borderRadius:
                                                              BorderRadius
                                                                  .circular(5),
                                                          border: Border.all(
                                                              color: Colors
                                                                  .black)),
                                                      child: InkWell(
                                                        onTap: () {
                                                          js.context.callMethod(
                                                              'open', [
                                                            data["mylinck"]
                                                                .toString()
                                                          ]);
                                                        },
                                                        child: Center(
                                                            child: RichText(
                                                          text: TextSpan(
                                                            children: [
                                                              TextSpan(
                                                                  text:
                                                                      "Click here to Apply ",
                                                                  style: TextStyle(
                                                                      color: Colors
                                                                          .white,
                                                                      fontWeight:
                                                                          FontWeight
                                                                              .normal,
                                                                      fontSize:
                                                                          text_size -
                                                                              4)),
                                                              WidgetSpan(
                                                                child: Icon(
                                                                  Icons
                                                                      .check_box,
                                                                  size: 14,
                                                                  color: color5,
                                                                ),
                                                              ),
                                                              TextSpan(
                                                                text: "",
                                                              ),
                                                            ],
                                                          ),
                                                        )),
                                                      )),
                                                )
                                              ],
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        );
                      }
                      return Container();
                    });
          },
        ));
  }
}
