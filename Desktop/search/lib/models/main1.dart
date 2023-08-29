import 'package:com.search/DPSA_Circular.dart';
import 'package:com.search/Fixedtem.dart';
import 'package:com.search/Shortterm.dart';
import 'package:com.search/city_Entities.dart';
import 'package:com.search/lib/internships.dart';
import 'package:com.search/junior_positions.dart';
import 'package:com.search/main.dart';
import 'package:flutter/material.dart';

import '../Firebasetest.dart';
import '../colors.dart';
import '../permanant_postions.dart';
import '../testing2.dart';

class NavBar extends StatelessWidget {
  static const color1 = Color(0xff334257);
  static const color2 = Color(0xff476072);
  static const color3 = Color(0xff395B64);
  static const color4 = Color(0xffEEEEEE);
  static const color5 = Color(0xffA5C9CA);
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        // Remove padding
        padding: EdgeInsets.zero,
        children: [
          UserAccountsDrawerHeader(
            accountName: Text(
              'Welecome to',
              style: TextStyle(fontStyle: FontStyle.normal),
            ),
            accountEmail: Text('SYGE'),
            currentAccountPicture: CircleAvatar(
              child: ClipOval(
                child: Image.asset(
                  'find.png',
                  fit: BoxFit.cover,
                  width: 90,
                  height: 90,
                ),
              ),
            ),
            decoration: BoxDecoration(
                color: Colors.red,
                image: new DecorationImage(
                  image: new AssetImage('forb.PNG'),
                  fit: BoxFit.cover,
                )),
          ),
          ListTile(
            leading: Icon(
              Icons.people_outline,
              color: Color.fromARGB(255, 80, 4, 124),
            ),
            title: Text('Senior Positions'),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => HomePage()),
              );
            },
          ),
          ListTile(
            leading: Icon(
              Icons.people_outline,
              color: Color.fromARGB(255, 80, 4, 124),
            ),
            title: Text('Junior Positions'),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => junior_postions()),
              );
            },
          ),
          ListTile(
            leading: Icon(
              Icons.people_outline,
              color: Color.fromARGB(255, 80, 4, 124),
            ),
            title: Text('Internships and Learnerships'),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => internships()),
              );
            },
          ),
          ListTile(
            leading: Icon(
              Icons.people_outline,
              color: Color.fromARGB(255, 80, 4, 124),
            ),
            title: Text('DPSA Circular'),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => DPSA_Circular()),
              );
            },
          ),
          Divider(),
          ListTile(
            // leading: Icon(
            //   Icons.people_outline,
            //   color: Color.fromARGB(255, 80, 4, 124),
            // ),
            title: Container(
              color: color4,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  RichText(
                    text: TextSpan(
                      children: [
                        TextSpan(
                          text: "Work in",
                        ),
                        TextSpan(
                          text: " Joburg  ",
                        ),
                        WidgetSpan(
                          child: Icon(
                            Icons.location_pin,
                            size: 20,
                            color: color5,
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Container(
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(5),
                    ),
                    height: 25,
                    width: 160,
                    child: InkWell(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => internships()),
                        );
                      },
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Padding(
                            padding: EdgeInsets.only(
                                right: 5, left: 10, bottom: 5, top: 5),
                            child: RichText(
                              text: TextSpan(
                                children: [
                                  TextSpan(
                                      text: "Internships",
                                      style: TextStyle(color: Colors.black)),
                                  //WidgetSpan(
                                  //child: Icon(
                                  //   Icons.present_to_all,
                                  //  size: 20,
                                  //  color: color3,
                                  // ),
                                  // ),
                                  TextSpan(
                                    text: " ",
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Divider(),
                  Container(
                    decoration: BoxDecoration(
                      color: color6,
                      borderRadius: BorderRadius.circular(5),
                    ),
                    height: 25,
                    width: 160,
                    child: InkWell(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => City_entities()),
                        );
                      },
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Padding(
                            padding: EdgeInsets.only(
                                right: 5, left: 10, bottom: 5, top: 5),
                            child: RichText(
                              text: TextSpan(
                                children: [
                                  TextSpan(
                                      text: "City Entities",
                                      style: TextStyle(color: Colors.black)),
                                  //WidgetSpan(
                                  //child: Icon(
                                  //   Icons.present_to_all,
                                  //  size: 20,
                                  //  color: color3,
                                  // ),
                                  // ),
                                  TextSpan(
                                    text: " ",
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Divider(),
                  Container(
                    decoration: BoxDecoration(
                      color: color5,
                      borderRadius: BorderRadius.circular(5),
                    ),
                    height: 25,
                    width: 160,
                    child: InkWell(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => permanant_positions()),
                        );
                      },
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Padding(
                            padding: EdgeInsets.only(
                                right: 5, left: 10, bottom: 5, top: 5),
                            child: RichText(
                              text: TextSpan(
                                children: [
                                  TextSpan(
                                      text: "Permanent Positions",
                                      style: TextStyle(color: Colors.black)),
                                  //WidgetSpan(
                                  //child: Icon(
                                  //   Icons.present_to_all,
                                  //  size: 20,
                                  //  color: color3,
                                  // ),
                                  // ),
                                  TextSpan(
                                    text: " ",
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Divider(),
                  Container(
                    decoration: BoxDecoration(
                      color: color2,
                      borderRadius: BorderRadius.circular(5),
                    ),
                    height: 25,
                    width: 200,
                    child: InkWell(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => fixed_term()),
                        );
                      },
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Padding(
                            padding: EdgeInsets.only(
                                right: 5, left: 10, bottom: 5, top: 5),
                            child: RichText(
                              text: TextSpan(
                                children: [
                                  TextSpan(
                                      text: "Fixed Term Contracts (FTC)",
                                      style: TextStyle(color: Colors.white)),
                                  //WidgetSpan(
                                  //child: Icon(
                                  //   Icons.present_to_all,
                                  //  size: 20,
                                  //  color: color3,
                                  // ),
                                  // ),
                                  TextSpan(
                                    text: " ",
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Divider(),
                  Container(
                    decoration: BoxDecoration(
                      color: color1,
                      borderRadius: BorderRadius.circular(5),
                    ),
                    height: 25,
                    width: 200,
                    child: InkWell(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => short_term()),
                        );
                      },
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Padding(
                            padding: EdgeInsets.only(
                                right: 5, left: 10, bottom: 5, top: 5),
                            child: RichText(
                              text: TextSpan(
                                children: [
                                  TextSpan(
                                      text: "Short Term Contracts (STC)",
                                      style: TextStyle(color: Colors.white)),
                                  //WidgetSpan(
                                  //child: Icon(
                                  //   Icons.present_to_all,
                                  //  size: 20,
                                  //  color: color3,
                                  // ),
                                  // ),
                                  TextSpan(
                                    text: " ",
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Divider(),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
